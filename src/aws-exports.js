// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_app_analytics': 'enable',
    'aws_cloud_logic': 'enable',
    'aws_cloud_logic_custom': [{"id":"6zez15z0i8","name":"EventMicroservice","description":"Created by AWS Lambda","endpoint":"https://6zez15z0i8.execute-api.eu-central-1.amazonaws.com/api","region":"eu-central-1","paths":["/events","/events/{eventid}"]}],
    'aws_cognito_identity_pool_id': 'eu-central-1:6618ad3a-50fb-415d-b6e6-95eb11b2eca4',
    'aws_cognito_region': 'eu-central-1',
    'aws_content_delivery': 'enable',
    'aws_content_delivery_bucket': 'yoin-hosting-mobilehub-1492367416',
    'aws_content_delivery_bucket_region': 'eu-central-1',
    'aws_content_delivery_cloudfront': 'enable',
    'aws_content_delivery_cloudfront_domain': 'd6zsjdv2j3y63.cloudfront.net',
    'aws_dynamodb': 'enable',
    'aws_dynamodb_all_tables_region': 'eu-central-1',
    'aws_dynamodb_table_schemas': [{"tableName":"yoin-mobilehub-1492367416-Events","attributes":[{"name":"userId","type":"S"},{"name":"itemId","type":"S"},{"name":"category","type":"S"},{"name":"details","type":"S"},{"name":"latitude","type":"N"},{"name":"longitude","type":"N"},{"name":"name","type":"S"}],"indexes":[{"indexName":"Categories","hashKey":"category","rangeKey":"longitude"}],"region":"eu-central-1","hashKey":"userId","rangeKey":"itemId"}],
    'aws_mobile_analytics_app_id': 'c8d3895699b94f1c8624eb33a86bce92',
    'aws_mobile_analytics_app_region': 'us-east-1',
    'aws_project_id': 'd5909af7-89fe-4271-88d0-9837da5b8fe5',
    'aws_project_name': 'yoin',
    'aws_project_region': 'eu-central-1',
    'aws_resource_name_prefix': 'yoin-mobilehub-1492367416',
    'aws_sign_in_enabled': 'enable',
    'aws_user_files': 'enable',
    'aws_user_files_s3_bucket': 'yoin-userfiles-mobilehub-1492367416',
    'aws_user_files_s3_bucket_region': 'eu-central-1',
    'aws_user_pools': 'enable',
    'aws_user_pools_id': 'eu-central-1_kg6BROibM',
    'aws_user_pools_mfa_type': 'OPTIONAL',
    'aws_user_pools_web_client_id': '7dj6j4cml31i6010cnf876rapn',
}

export default awsmobile;
