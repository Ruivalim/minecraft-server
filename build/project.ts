#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import MinecraftServer from '../src/project-stack';

const app = new cdk.App();

new MinecraftServer(app, 'MinecraftServer', {
    env: {
        region: 'sa-east-1',
    },
});
