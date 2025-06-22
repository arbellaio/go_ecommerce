package mail

import (
	"bytes"
	"fmt"
	"html/template"
	"net/smtp"
	"os"

	"github.com/arbellaio/tools/logger"
)

// "../../../../arbella_gotools/mail/register.tmpl"
type MailInformation struct {
	SmtpHost     string
	SmtpPort     string
	From         string // also username
	Password     string
	To           []string
	Subject      string
	Message      []byte
	TemplateName string
	Template     MailTemplate
}

// path for email template should be from cmd directory
type MailTemplate struct {
	BrandLogo       string
	TemplateSubject string
	ReceiverName    string
	ReceiverEmail   string
	Link            string
	BusinessName    string
	BusinessId      string
	UserId          string
}

func (mail *MailInformation) Send(logger *logger.Log) error {

	// authentication
	auth := smtp.PlainAuth("", mail.From, mail.Password, mail.SmtpHost)

	// parsing template
	var err error

	// mail body
	var body bytes.Buffer

	// mime headers
	mimeHeaders := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n"

	body.Write([]byte(fmt.Sprintf("Subject:"+mail.Subject+"\n%s\n\n %s", mimeHeaders, mail.Message)))

	wd, err := os.Getwd()
	if err != nil {
		logger.Errorf("%#v", err)
		return err
	}
	logger.Informationf("%#v", wd)
	// Template
	if mail.TemplateName != "" {
		t, err := template.ParseFiles(mail.TemplateName)
		if err != nil {
			logger.Errorf("error occurred while parsing template files %#v", err.Error())
			return err
		}
		t.Execute(&body, mail.Template)
	}

	// Sending email
	err = smtp.SendMail(mail.SmtpHost+":"+mail.SmtpPort, auth, mail.From, mail.To, body.Bytes())
	if err != nil {
		logger.Errorf("error occurred while sending email %#v", err.Error())
		return err
	}
	return nil
}
