/**
 * Generatic mail sender
 *
 * @since 2017.03.30
 * @author titus
 */

'use strict';

const nodemailer = require('nodemailer');
const Config = require('config');
const Logger = require('../commonlib/logger');
const fs = require('fs');
const approot = require('app-root-path');
const handlebars = require('handlebars');

let config = Config.get('Mail');

class MailSender {
    constructor( configName ){
        if( configName ){
            config = Config.get( configName );
        }

        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.account,
                pass: config.password
            }
        });
    }

    sendMail(conditions){
        let fileName = conditions.fileName;
        let subject = conditions.subject;

        let agencyName = conditions.agencyName;
        let receiverEmail = conditions.receiverEmail;
        let userName = conditions.userName;
        let userAccount = conditions.userAccount;
        let UserPassword = conditions.userPassWord;
        let CustomizeLinkAgencyProfile = conditions.CustomizeLinkAgencyProfile;
        let FullName = conditions.FullName;

        let path = `${approot}/email/${fileName}`;
        let mailOptions = {
            from: 'deepblu.com', // sender address
            to: receiverEmail, // list of receivers
            subject: subject
            // text: 'Hello world ?', // plain text body
        };

        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            });
        }).then(words => {
            // using handlebars to replace wordy in template
            let template = handlebars.compile(words);
            let replacements = {
                AgencyName: agencyName,
                EmailLink: 'deepblu.com',
                CustomizeLinkAgencyProfile: CustomizeLinkAgencyProfile,
                CreateProfileTeach: 'https://academy.deepblu.com/promoting-your-organization-or-business-on-deepblu/',
                GainAttractionLink:
                'https://academy.deepblu.com/promoting-your-organization-or-business-on-deepblu/#traction',
                UserEmail: receiverEmail,
                UserPassword: UserPassword,
                FullName: FullName
            }
            let htmlToSend = template(replacements);

            // mailOptions.html = words;
            mailOptions.html = htmlToSend;
            this.transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    Logger.error(error);
                }else{
                    Logger.info('mail sended');
                    // return resolve({
                    //     messageId: info.messageId,
                    //     response : info.response
                    // });
                }
            });
        });
    }

}

module.exports = MailSender;
