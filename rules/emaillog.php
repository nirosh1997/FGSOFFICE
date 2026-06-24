<?php

include '../dbsetting.php';

$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}


if (($_POST["action"] == "getEmailLog")) {
    $response = array();
    $sql = "";


    $sql = "SELECT * FROM emaillog;";
    // echo $sql;
    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'ref_no' => $row["ref_no"],
                    'eid' => $row["eid"],
                    'efrom' => $row["efrom"],
                    'senderName' => $row["senderName"],
                    'esubject' => $row["esubject"],
                    'etext' => $row["etext"],
                    'eattachments' => json_encode($row["eattachments"]),
                    'date' => $row["date"]
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}

if (($_POST["action"] == "getEmailLogMy")) {
    $response = array();
    $sql = "";


    $sql = "SELECT * FROM emaillog WHERE eid = '" . $_POST["userName"] . "';";
    // echo $sql;
    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'ref_no' => $row["ref_no"],
                    'eid' => $row["eid"],
                    'efrom' => $row["efrom"],
                    'senderName' => $row["senderName"],
                    'esubject' => $row["esubject"],
                    'etext' => $row["etext"],
                    'eattachments' => json_encode($row["eattachments"]),
                    'date' => $row["date"]
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


if (($_POST["action"] == "getEmailContact")) {
    $response = array();
    $sql = "";

    $sql = "SELECT * FROM emailloguser Where campid = '" . $_POST['campId'] . "';";
    // echo $sql;
    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'campid' => $row["campid"],
                    'eto' => $row["eto"],
                    'created' => $row["CREATED"]

                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}

if (($_POST["action"] == "getEmailLable")) {
    $response = [];

    $sql = "SELECT id, label_name FROM email_labels ORDER BY label_name ASC";
    $result = $dbCon->query($sql);

    if ($result && $result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            $response[] = [
                'id' => $row['id'],
                'label_name' => $row['label_name']
            ];
        }
    } else {
        $response[] = [
            'id' => 0,
            'label_name' => 'No Labels Found'
        ];
    }

    echo json_encode($response);
}

if (($_POST['action'] === 'getRecipientsByLabel')) {

    $response = [
        'status' => 400,
        'data' => []
    ];

    $labelId = $_POST['label_id'];

    if ($labelId === 'ALL') {

        $sql = "SELECT email, full_name FROM email_recipients WHERE status = 1";
    } else {

        $sql = "
            SELECT r.email, r.full_name
            FROM email_recipients r
            INNER JOIN email_label_map m ON m.recipient_id = r.id
            WHERE m.label_id = '" . $dbCon->real_escape_string($labelId) . "'
              AND r.status = 1
        ";
    }

    $result = $dbCon->query($sql);

    if ($result && $result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            $response['data'][] = [
                'email' => $row['email'],
                'full_name' => $row['full_name']
            ];
        }

        $response['status'] = 200;
    }

    echo json_encode($response);
}

if ($_POST['action'] === 'createEmailCampaign') {

    // ------------------------------------------------------------------
    // 1. INPUT (basic sanitization)
    // ------------------------------------------------------------------
    $from        = $dbCon->real_escape_string($_POST['from']);
    $subject     = $dbCon->real_escape_string($_POST['subject']);
    $text        = $dbCon->real_escape_string($_POST['text']);
    $attachments = json_encode($_POST['attachments'] ?? []);
    $labelId     = $dbCon->real_escape_string($_POST['label_id']);

    // ------------------------------------------------------------------
    // 2. CREATE CAMPAIGN (NOT_STARTED)
    // ------------------------------------------------------------------
    try {
         $dbCon->query("
        INSERT INTO emaillog (
            efrom,
            esubject,
            etext,
            eattachments,
            campaign_status,
            total_recipients,
            sent_count,
            date
        ) VALUES (
            '$from',
            '$subject',
            '$text',
            '$attachments',
            'NOT_STARTED',
            0,
            0,
            NOW()
        )
    ");
    } catch (\Throwable $th) {
        echo $th;
    }
   

    if ($dbCon->affected_rows === 0) {
        echo json_encode(['status' => 500, 'msg' => 'Campaign creation failed']);
    }

    $campId = $dbCon->insert_id;

    // ------------------------------------------------------------------
    // 3. LOAD RECIPIENTS
    // ------------------------------------------------------------------
    if ($labelId === 'ALL') {
        $sql = "
            SELECT email 
            FROM email_recipients 
            WHERE status = 1
        ";
    } else {
        $sql = "
            SELECT r.email
            FROM email_recipients r
            JOIN email_label_map m ON m.recipient_id = r.id
            WHERE m.label_id = '$labelId'
              AND r.status = 1
        ";
    }

    $res = $dbCon->query($sql);

    if (!$res || $res->num_rows === 0) {
        echo json_encode(['status' => 400, 'msg' => 'No recipients found']);
    }

    // ------------------------------------------------------------------
    // 4. INSERT RECIPIENT QUEUE
    // ------------------------------------------------------------------
    $total = 0;

    while ($r = $res->fetch_assoc()) {

        $email = $dbCon->real_escape_string($r['email']);

        $dbCon->query("
            INSERT INTO emailloguser (
                campid,
                eto,
                send,
                open,
                opendate,
                created
            ) VALUES (
                '$campId',
                '$email',
                0,
                0,
                NULL,
                NOW()
            )
        ");

        $total++;
    }

    // ------------------------------------------------------------------
    // 5. UPDATE CAMPAIGN RECIPIENT COUNT
    // ------------------------------------------------------------------
    $dbCon->query("
        UPDATE emaillog
        SET total_recipients = $total
        WHERE ref_no = $campId
    ");
    // ------------------------------------------------------------------
    // 6. RESPONSE
    // ------------------------------------------------------------------
    echo json_encode([
        'status'            => 200,
        'campId'            => $campId,
        'total_recipients'  => $total,
        'campaign_status'   => 'NOT_STARTED'
    ]);
}



$dbCon->close(); {
    $ldap_server = "kln.ac.lk";
    $login_protocol = "ldaps"; //If not working try with ldap. But in production this should be ldaps
    $ipl = gethostbynamel($ldap_server);
    $port = getservbyname($login_protocol, "tcp");
    $login = false;
    for ($i = 0; $i < count($ipl); $i++) {
        try {
            if ($up = fsockopen($ipl[$i], $port, $errno, $errstr, 1)) {
                $ip = $ipl[$i];
                fclose($up);
                $host = gethostbyaddr($ip);
                $lcn = ldap_connect("$login_protocol://$host");
                if ($lcn) {
                    ldap_set_option($lcn, LDAP_OPT_PROTOCOL_VERSION, 3);
                    ldap_set_option($lcn, LDAP_OPT_REFERRALS, 0);
                    $login = ldap_bind($lcn, "$user@$ldap_server", $pw);
                    if ($login) {
                        break;
                    }
                }
            }
        } catch (\Exception $e) {
            //var_dump($e);
        }
    }
    return $login;
}
