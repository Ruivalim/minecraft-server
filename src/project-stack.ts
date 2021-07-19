import { SubnetType, Vpc, Instance, InstanceType, SecurityGroup, Peer, Port, InstanceClass, InstanceSize, MachineImage, CfnEIP } from '@aws-cdk/aws-ec2';
import { Stack, StackProps, Construct, CfnOutput } from '@aws-cdk/core';

export default class ProjectStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const vpc = new Vpc(this, 'VPC', {
            natGateways: 0,
            subnetConfiguration: [
                {
                    subnetType: SubnetType.PUBLIC,
                    name: 'Public',
                },
            ],
        });

        const securityGroup = new SecurityGroup(this, 'SG', {
            vpc,
            allowAllOutbound: true,
        });

        securityGroup.addIngressRule(Peer.anyIpv4(), Port.tcp(25565));
        securityGroup.addIngressRule(Peer.anyIpv4(), Port.tcp(22));

        const instance = new Instance(this, 'Server', {
            vpc,
            securityGroup,
            instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.SMALL),
            machineImage: MachineImage.genericLinux({
                'sa-east-1': 'ami-05aa753c043f1dcd3', // Ubuntu 18.04 LTS Server
            }),
            keyName: 'minecraft-server', // Generate this key before deploying
        });

        new CfnOutput(this, 'IP Address', { value: instance.instancePublicIp });
    }
}
