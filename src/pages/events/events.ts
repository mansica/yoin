import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, Logger } from 'aws-amplify';

import { EventPage } from '../event/event';
const aws_exports = require('../../aws-exports').default;

import { DynamoDB } from '../../providers/providers';
const logger = new Logger('Events');

import AWS from 'aws-sdk';
AWS.config.logger = console

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  public items: any;
  public refresher: any;
  private eventTable: string = aws_exports.aws_resource_name_prefix + '-Events';
  private userId: string;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,
    public db: DynamoDB) {

    Auth.currentCredentials()
      .then(credentials => {
        this.userId = credentials.identityId;
        this.refreshTasks();
      })
      .catch(err => logger.debug('get current credentials err', err));
  }

  goToEvent(params){
    //if (!params) params = {};
    logger.debug("Item", {event: params})
    this.navCtrl.push(EventPage, {event: params});
  }

  refreshTasks() {
    const params = {
      'TableName': this.eventTable,
//      'IndexName': 'date',
      'KeyConditionExpression': "#userId = :userId",
      'ExpressionAttributeNames': { '#userId': 'userId' },
      'ExpressionAttributeValues': { ':userId': this.userId },
      'ScanIndexForward': false
    };

    this.db.getDocumentClient()
      .then(client => client.query(params).promise())
      .then(data => { this.items = data.Items; })
      .catch(err => logger.debug('error in refresh tasks', err))
      .then(() => { this.refresher && this.refresher.complete() });
  }

}
