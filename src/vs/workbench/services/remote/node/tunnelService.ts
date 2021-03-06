/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ITunnelService, RemoteTunnel } from 'vs/platform/remote/common/tunnel';

export class TunnelService implements ITunnelService {
	_serviceBrand: any;

	public constructor(
	) {
	}

	openTunnel(remotePort: number): Promise<RemoteTunnel> | undefined {
		return undefined;
	}
}
