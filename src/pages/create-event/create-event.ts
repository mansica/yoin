import { DynamoDB } from './../../providers/aws.dynamodb';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Auth, Logger } from 'aws-amplify';
import { EventsPage } from '../events/events';
const logger = new Logger('CreateEvent');
const aws_exports = require('../../aws-exports').default;

import AWS from 'aws-sdk';
AWS.config.logger = console

@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html'
})
export class CreateEventPage {
  public item:any;
  private eventTable: string = aws_exports.aws_resource_name_prefix + '-Events';
  public categories:any;

  constructor(public navCtrl: NavController, public db: DynamoDB, public loadingCtrl: LoadingController) {
    Auth.currentCredentials()
    .then(credentials => {
      this.item = {
        'userId': credentials.identityId,
        'itemId': this.generateId(),
        'category': this.categories[0].name
      };
    })
    .catch(err => logger.debug('get current credentials err', err));
    this.categories = [
      {name:'Soccer',icon:'football'},
      {name:'American football',icon:"american-football"},
      {name:'Baseball',icon:"baseball"},
      {name:'Basketball',icon:"basketball"},
      {name:'Bicycle',icon:"bicycle"},
      {name:'Tennis',icon:"tennisball"},
      {name:'Gaming',icon:"game-controller-b"},
      {name:'Travel',icon:"globe"}
    ];
  }

  createEvent() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    const params = {
      'TableName': this.eventTable,
      'Item': this.item,
      'ConditionExpression': 'attribute_not_exists(id)'
    };
    this.db.getDocumentClient()
      .then(client => client.put(params).promise())
      .then(data => this.navCtrl.push(EventsPage))
      .catch(err => logger.debug('create event error', err))
      .then(loading.dismiss);
  }

  generateId() {
    var len = 16;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charLength = chars.length;
    var result = "";
    let randoms = window.crypto.getRandomValues(new Uint32Array(len));
    for(var i = 0; i < len; i++) {
      result += chars[randoms[i] % charLength];
    }
    return result.toLowerCase();
  }

}
