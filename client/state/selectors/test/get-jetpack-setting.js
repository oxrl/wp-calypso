/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import { getJetpackSetting } from '../';
import { settings as SETTINGS_FIXTURE } from './fixtures/jetpack-settings';

describe( 'getJetpackSetting()', () => {
	it( 'should return a certain setting for a known site', () => {
		const stateIn = {
				jetpack: {
					settings: {
						items: SETTINGS_FIXTURE
					}
				}
			},
			siteId = 12345678,
			setting = 'setting_1';
		const output = getJetpackSetting( stateIn, siteId, setting );
		expect( output ).to.eql( SETTINGS_FIXTURE[ siteId ][ setting ] );
	} );

	it( 'should return null for an unknown site', () => {
		const stateIn = {
				jetpack: {
					settings: {
						items: {
							654321: SETTINGS_FIXTURE[ 12345678 ]
						}
					}
				}
			},
			siteId = 12345678,
			setting = 'setting_1';
		const output = getJetpackSetting( stateIn, siteId, setting );
		expect( output ).to.be.null;
	} );

	it( 'should return null for an unknown setting', () => {
		const stateIn = {
				jetpack: {
					settings: {
						items: {
							654321: SETTINGS_FIXTURE[ 12345678 ]
						}
					}
				}
			},
			siteId = 12345678,
			setting = 'unexisting_setting';
		const output = getJetpackSetting( stateIn, siteId, setting );
		expect( output ).to.be.null;
	} );
} );