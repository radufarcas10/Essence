import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '../components/essence-appbar/src/appbar.jsx';
import Text from '../components/essence-core/src/text/text.jsx';
import Block from '../components/essence-core/src/block/block.jsx';
import Icon from '../components/essence-icon/src/icon.jsx';
import Menu from '../components/essence-menu/src/menu.jsx';
import Switch from '../components/essence-switch/src/switch.jsx';
import List from '../components/essence-list/src/list.jsx';
import ListItem from '../components/essence-list/src/item.jsx';
import Navigation from '../components/essence-navigation/src/navigation.jsx';
import Image from '../components/essence-image/src/image.jsx';
import DataTable from '../components/essence-data-table/src/table.jsx';
import DataTableHeader from '../components/essence-data-table/src/header.jsx';
import DataTableBody from '../components/essence-data-table/src/body.jsx';
import DataTableRow from '../components/essence-data-table/src/row.jsx';
import DataTableColumn from '../components/essence-data-table/src/column.jsx';

ReactDOM.render(

	<Block>
		<AppBar classes={'e-background-yellow-100'}>
			<Icon name={'navigation-menu'} classes={'e-left'} />
			<Menu type={'cover'} classes={'e-left'} placeholder={'Options'}>
			   	<Block placeholder={'Notifications'}>
				   	<Icon name='notification-sms' />
					<Text>Notifications</Text>
				</Block>
				<Block placeholder={'Tap & Play'}>
				   	<Icon name='notification-tap-and-play' />
					<Text>Tap & Play</Text>
				</Block>
				<Block>
				   	<Icon name='notification-vibration' />
					<Text>Vibrations</Text>
				</Block>
			</Menu>
		    <Icon name={'navigation-more-vert'} classes={'e-right'} />
		    <Icon name={'action-favorite'} classes={'e-right'} />
		    <Icon name={'action-search'} classes={'e-right'} />	   
		</AppBar>
{/*
		<Navigation visible={true} classes={'e-background-green-100'}>
			<Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
				<Block type={'header'} classes={'e-nav-header e-background-red-100'}>
					<Text>Navigation header</Text>
				</Block>
				<List type={'navigation'}>
					<ListItem>
						<Text type={'a'} href={'#inbox'}>
							<Icon name={'content-inbox'} />
							Inbox
						</Text>
					</ListItem>
					<ListItem>
						<Text type={'a'} href={'#starred'}>
							<Icon name={'action-grade'} />
							Starred
						</Text>
					</ListItem>
					<ListItem>
						<Text type={'a'} href={'#send'}>
							<Icon name={'content-send'} />
							Sent mail
						</Text>
					</ListItem>
					<ListItem>
						<Text type={'a'} href={'#item 4'}>
							<Icon name={'action-account-circle'} />
							Drafts
						</Text>
					</ListItem>
					
				</List>
				<Block type={'footer'} classes={'e-nav-footer e-background-red-100'}>
					Navigation footer
				</Block>
			</Block>
		</Navigation>
*/}


		<Block classes={'e-row e-margin-top-25'}>
			<Block classes={'brick brick-4'}></Block>
			<Block classes={'brick brick-4 e-shadow-1 e-no-padding'}>
				<List type={'navigation'}>
					<ListItem>
						<Text type={'a'} href={'#inbox'}>	
							<Image classes={'e-avatar e-left'} src='http://i.imgur.com/3pmiEzi.jpg' alt={'Boat'} />
							Inbox
							<Icon name={'content-inbox e-right'} />
						</Text>
					</ListItem>
					<ListItem>
						<Text type={'a'} href={'#starred'}>
							<Image classes={'e-avatar e-left'} src='http://i.imgur.com/3pmiEzi.jpg' alt={'Boat'} />
							Starred
							<Icon name={'action-grade e-right'} />	
						</Text>
					</ListItem>
					<ListItem>
						<Text type={'a'} href={'#send'}>
							<Image classes={'e-avatar e-left'} src='http://i.imgur.com/3pmiEzi.jpg' alt={'Boat'} />
							Sent mail
							<Icon name={'content-send e-right'} />
						</Text>
					</ListItem>
					<ListItem>
						<Text type={'a'} href={'#send'}>
							<Image classes={'e-avatar e-left'} src='http://i.imgur.com/3pmiEzi.jpg' alt={'Boat'} />
							Drafts
							<Icon name={'action-account-circle e-right'} />
						</Text>
					</ListItem>
				</List>
			</Block>
			<Block classes={'brick brick-4'}></Block>
		</Block>


		<DataTable>
			<DataTableHeader classes={'e-text-grey-400'}>
				<DataTableRow>
					<DataTableColumn>
						<Switch
							type='checkbox'
							name='column'
							defaultValue='radio-value'
						/>
					</DataTableColumn>
					<DataTableColumn>
						Column 1
					</DataTableColumn>
					<DataTableColumn>
						Column 2
					</DataTableColumn>
					<DataTableColumn>
						Column 3
					</DataTableColumn>
				</DataTableRow>
			</DataTableHeader>

			<DataTableBody classes={'e-text-grey-700'}>
				<DataTableRow>
					<DataTableColumn>
						<Switch
							type='checkbox'
							name='column'
							defaultValue='radio-value'
						/>
					</DataTableColumn>
					<DataTableColumn>Row 1 Column 1</DataTableColumn>
					<DataTableColumn>Row 1 Column 2</DataTableColumn>
					<DataTableColumn>Row 1 Column 3</DataTableColumn>
				</DataTableRow>
				<DataTableRow>
					<DataTableColumn>
						<Switch
							type='checkbox'
							name='column'
							defaultValue='radio-value'
						/>
					</DataTableColumn>
					<DataTableColumn>Row 2 Column 1</DataTableColumn>
					<DataTableColumn>Row 2 Column 2</DataTableColumn>
					<DataTableColumn>Row 2 Column 3</DataTableColumn>
				</DataTableRow>
				<DataTableRow>
					<DataTableColumn>
						<Switch
							type='checkbox'
							name='column'
							defaultValue='radio-value'
						/>
					</DataTableColumn>
					<DataTableColumn>Row 3 Column 1</DataTableColumn>
					<DataTableColumn>Row 3 Column 2</DataTableColumn>
					<DataTableColumn>Row 3 Column 3</DataTableColumn>
				</DataTableRow>
			</DataTableBody>
		</DataTable>

	</Block>

	,
	document.querySelector('.app')
);