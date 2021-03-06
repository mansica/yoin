// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
var aws_app_analytics = 'enable';
var aws_cognito_identity_pool_id = 'eu-central-1:6618ad3a-50fb-415d-b6e6-95eb11b2eca4';
var aws_cognito_region = 'eu-central-1';
var aws_content_delivery = 'enable';
var aws_content_delivery_bucket = 'yoin-hosting-mobilehub-1492367416';
var aws_content_delivery_bucket_region = 'eu-central-1';
var aws_content_delivery_cloudfront = 'enable';
var aws_content_delivery_cloudfront_domain = 'd6zsjdv2j3y63.cloudfront.net';
var aws_dynamodb = 'enable';
var aws_dynamodb_all_tables_region = 'eu-central-1';
var aws_dynamodb_table_schemas = [{"tableName":"yoin-mobilehub-1492367416-Events","attributes":[{"name":"userId","type":"S"},{"name":"itemId","type":"S"},{"name":"category","type":"S"},{"name":"date","type":"S"},{"name":"details","type":"S"},{"name":"latitude","type":"N"},{"name":"longitude","type":"N"},{"name":"name","type":"S"}],"indexes":[{"indexName":"Categories","hashKey":"category","rangeKey":"longitude"},{"indexName":"Date","hashKey":"date","rangeKey":"category"}],"region":"eu-central-1","hashKey":"userId","rangeKey":"itemId"}];
var aws_mobile_analytics_app_id = 'c8d3895699b94f1c8624eb33a86bce92';
var aws_mobile_analytics_app_region = 'us-east-1';
var aws_project_id = 'd5909af7-89fe-4271-88d0-9837da5b8fe5';
var aws_project_name = 'yoin';
var aws_project_region = 'eu-central-1';
var aws_resource_name_prefix = 'yoin-mobilehub-1492367416';
var aws_sign_in_enabled = 'enable';
var aws_user_files = 'enable';
var aws_user_files_s3_bucket = 'yoin-userfiles-mobilehub-1492367416';
var aws_user_files_s3_bucket_region = 'eu-central-1';
var aws_user_pools = 'enable';
var aws_user_pools_id = 'eu-central-1_gwcXmAV0p';
var aws_user_pools_mfa_type = 'OPTIONAL';
var aws_user_pools_web_client_id = '3i0057pmsvlu2gvoev218mtae5';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
  });
AWS.config.update({customUserAgent: 'MobileHub v0.1'});
