exports.registerAdmin = `
<!DOCTYPE html>
<html>
<head>
<title> Generate Password </title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<style type="text/css">    
    /* CLIENT-SPECIFIC STYLES */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }
    /* RESET STYLES */
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    /* MOBILE STYLES */
    @media screen and (max-width:600px){
        h1 {
            font-size: 32px !important;
            line-height: 32px !important;
        }
    }
    /* ANDROID CENTER FIX */
    div[style*="margin: 16px 0;"] { margin: 0 !important; }
</style>
<style type="text/css">
</style>
</head>
<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
GENERATE YOUR ADMIN ACCOUNT PASSWORD
</div>
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <!-- LOGO -->
    <tr>
        <td bgcolor="#f4f4f4" align="center">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                <tr>
                    <td align="center" valign="top" style="padding: 40px 10px 40px 10px; background: #FF0001;">
                        <a href="http://rightindem.com" target="_blank">
                            <img alt="Logo" src="{{ip}}/public/images/logo.png" width="169" height="40" style="display: block; width: 169px; max-width: 169px; min-width: 169px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">
                        </a>
                    </td>
                </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
    <!-- HERO -->
    <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                <tr>
                    <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                      <h1 style="font-size: 28px; font-weight: 500; margin: 0; letter-spacing: 0px;">YOUR SELECTED DETAIL ON APPLIFY CALCULATOR ARE</h1>
                    </td>
                </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
    <!-- COPY BLOCK -->
    <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
              <!-- COPY -->
              <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;">Your selected categories are.</p>
                </td>
                <td bgcolor="#ffffff">
                <b>Application Type</b>:{{user_applicationType}}<br>
                <b>Plateform</b>:{{user_plateform}}<br>
                <b>Category</b>:{{user_category}}<br>
                <b>loginType</b>:{{user_loginType}}<br>
                <b>Profile</b>:{{user_profile}}<br>
                <b>MVP Feactures</b>:{{user_mvpFeatures}}<br>
                <b>AdditionalFeature</b>:{{user_additionalFeatures}}<br>
                <b>TotalHours</b>:{{user_totalHours}}<br>
                </td>
              </tr>
              <!-- BULLETPROOF BUTTON -->
              <tr style="margin-left:10px">

              

                  </table>
                </td>
              </tr>
              <!-- COPY -->
              <!-- <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 0px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;">If that doesn't work, copy and paste the following link in your browser:</p>
                </td>
              </tr> -->
              <!-- COPY -->
                <!-- <tr>
                  <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 20px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                    <p style="margin: 0;"><a href="http://litmus.com" target="_blank" style="color: #4A35EA;">XXX.XXXXXXX.XXX/XXXXXXXXXXXXX</a></p>
                  </td>
                </tr> -->
              <!-- COPY -->
              <!-- <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;">If you have any questions, just reply to this email—we're always happy to help out.</p>
                </td>
              </tr> -->
              <!-- COPY -->
              <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 500; line-height: 25px;" >
                  <p style="margin: 0;">Best Wishes,<br>APP Support</p>
                </td>
              </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>
`;
