---
id: Notification drawer
section: components
cssPrefix: pf-c-notification-drawer
propComponents:
  [
    'NotificationDrawer',
    'NotificationDrawerBody',
    'NotificationDrawerHeader',
    'NotificationDrawerGroup',
    'NotificationDrawerGroupList',
    'NotificationDrawerList',
    'NotificationDrawerListItem',
    'NotificationDrawerListItemBody',
    'NotificationDrawerListItemHeader',
  ]
beta: true
---

import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

## Examples

### Basic

```js
import React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownPosition,
  DropdownDirection,
  DropdownSeparator,
  KebabToggle,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Title
} from '@patternfly/react-core';

class BasicNotificationDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: new Array(6).fill(false),
      isDrawerOpen: true
    };
    this.onDrawerClose = () => {
      this.setState({
        isDrawerOpen: false
      });
    };
    this.onToggle = index => isOpen => {
      newState = [...this.state.isOpen.slice(0, index), isOpen, ...this.state.isOpen.slice(index + 1)];
      this.setState({ isOpen: newState });
    };
    this.onSelect = event => {
      this.setState({ isOpen: new Array(6).fill(false) });
    };
  }

  render() {
    const [isOpen0, isOpen1, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6] = this.state.isOpen;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>
    ];
    return (
      <NotificationDrawer>
        <NotificationDrawerHeader count={3} onClose={this.onDrawerClose}>
          <Dropdown
            onSelect={this.onSelect}
            toggle={<KebabToggle onToggle={this.onToggle(0)} id="basic-kebab-toggle" />}
            isOpen={isOpen0}
            isPlain
            dropdownItems={dropdownItems}
            id="basic-notification-0"
            position={DropdownPosition.right}
          />
        </NotificationDrawerHeader>
        <NotificationDrawerBody>
          <NotificationDrawerList>
            <NotificationDrawerListItem variant="info">
              <NotificationDrawerListItemHeader
                variant="info"
                title="Unread info notification title"
                srTitle="Info notification:"
              >
                <Dropdown
                  position={DropdownPosition.right}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(1)} id="basic-toggle-id-1" />}
                  isOpen={isOpen1}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="basic-notification-1"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="5 minutes ago">
                This is an info notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="danger">
              <NotificationDrawerListItemHeader
                variant="danger"
                title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                srTitle="Danger notification:"
              >
                <Dropdown
                  position={DropdownPosition.right}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(2)} id="basic-toggle-id-2" />}
                  isOpen={isOpen2}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="basic-notification-2"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="10 minutes ago">
                This is a danger notification description. This is a long description to show how the title will wrap if
                it is long and wraps to multiple lines.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="danger">
              <NotificationDrawerListItemHeader
                truncateTitle={1}
                variant="danger"
                title="Unread danger notification title. This is a long title to show how the title will be truncated if it is long and will be shown in a single line."
                srTitle="Danger notification:"
              >
                <Dropdown
                  position={DropdownPosition.right}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(3)} id="basic-toggle-id-3" />}
                  isOpen={isOpen3}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="basic-notification-3"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="10 minutes ago">
                This is a danger notification description. This is a long description to show how the title will wrap if
                it is long and wraps to multiple lines.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="warning" isRead>
              <NotificationDrawerListItemHeader
                variant="warning"
                title="Read warning notification title"
                srTitle="Warning notification:"
              >
                <Dropdown
                  position={DropdownPosition.right}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(4)} id="basic-toggle-id-4" />}
                  isOpen={isOpen4}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="basic-notification-4"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="20 minutes ago">
                This is a warning notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="success" isRead>
              <NotificationDrawerListItemHeader
                variant="success"
                title="Read success notification title"
                srTitle="Success notification:"
              >
                <Dropdown
                  position={DropdownPosition.right}
                  direction={DropdownDirection.up}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(5)} id="basic-toggle-id-5" />}
                  isOpen={isOpen5}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="basic-notification-5"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="30 minutes ago">
                This is a success notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem isRead>
              <NotificationDrawerListItemHeader title="Read (default) notification title" srTitle="notification:">
                <Dropdown
                  position={DropdownPosition.right}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(6)} id="basic-toggle-id-6" />}
                  isOpen={isOpen6}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="basic-notification-6"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="35 minutes ago">
                This is a default notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
          </NotificationDrawerList>
        </NotificationDrawerBody>
      </NotificationDrawer>
    );
  }
}
```

### Groups

```js
import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  DropdownDirection,
  DropdownSeparator,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStatePrimary,
  KebabToggle,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerGroup,
  NotificationDrawerGroupList,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Title
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

class GroupNotificationDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMap: null,
      firstGroupExpanded: false,
      secondGroupExpanded: false,
      thirdGroupExpanded: true
    };
    this.onToggle = (id, isOpen) => {
      this.setState({
        isOpenMap: { [id]: isOpen }
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpenMap: null
      });
    };
    this.toggleFirstDrawer = (event, value) => {
      this.setState({
        firstGroupExpanded: value
      });
    };
    this.toggleSecondDrawer = (event, value) => {
      this.setState({
        secondGroupExpanded: value
      });
    };
    this.toggleThirdDrawer = (event, value) => {
      this.setState({
        thirdGroupExpanded: value
      });
    };
  }
  render() {
    const { isOpenMap, firstGroupExpanded, secondGroupExpanded, thirdGroupExpanded } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="disabled link" isDisabled>
        Disabled link
      </DropdownItem>
    ];
    return (
      <NotificationDrawer>
        <NotificationDrawerHeader count={4}>
          <Dropdown
            onSelect={this.onSelect}
            toggle={<KebabToggle onToggle={isOpen => this.onToggle('groups-kebab-toggle-1', isOpen)} id="groups-kebab-toggle-1" />}
            isOpen={isOpenMap && isOpenMap['groups-kebab-toggle-1']}
            isPlain
            dropdownItems={dropdownItems}
            id="grouped-notification-1"
            position={DropdownPosition.right}
          />
        </NotificationDrawerHeader>
        <NotificationDrawerBody>
          <NotificationDrawerGroupList>
            <NotificationDrawerGroup
              title="First notification group"
              isExpanded={firstGroupExpanded}
              count={2}
              onExpand={this.toggleFirstDrawer}
            >
              <NotificationDrawerList isHidden={!firstGroupExpanded}>
                <NotificationDrawerListItem variant="info">
                  <NotificationDrawerListItemHeader
                    variant="info"
                    title="Unread info notification title"
                    srTitle="Info notification:"
                  >
                    <Dropdown
                      position={DropdownPosition.right}
                      onSelect={this.onSelect}
                      toggle={
                        <KebabToggle onToggle={isOpen => this.onToggle('groups-notification-kebab-toggle-2', isOpen)} id="groups-kebab-toggle-2" />
                      }
                      isOpen={isOpenMap && isOpenMap['groups-notification-kebab-toggle-2']}
                      isPlain
                      dropdownItems={dropdownItems}
                      id="grouped-notification-2"
                    />
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="5 minutes ago">
                    This is an info notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="danger">
                  <NotificationDrawerListItemHeader
                    variant="danger"
                    title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                    srTitle="Danger notification:"
                  >
                    <Dropdown
                      position={DropdownPosition.right}
                      onSelect={this.onSelect}
                      toggle={
                        <KebabToggle onToggle={isOpen => this.onToggle('groups-kebab-toggle-3', isOpen)} id="groups-kebab-toggle-3" />
                      }
                      isOpen={isOpenMap && isOpenMap['groups-kebab-toggle-3']}
                      isPlain
                      dropdownItems={dropdownItems}
                      id="grouped-notification-3"
                    />
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="10 minutes ago">
                    This is a danger notification description. This is a long description to show how the title will
                    wrap if it is long and wraps to multiple lines.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="warning" isRead>
                  <NotificationDrawerListItemHeader
                    variant="warning"
                    title="Read warning notification title"
                    srTitle="Warning notification:"
                  >
                    <Dropdown
                      position={DropdownPosition.right}
                      onSelect={this.onSelect}
                      toggle={
                        <KebabToggle onToggle={isOpen => this.onToggle('groups-kebab-toggle-4', isOpen)} id="groups-kebab-toggle-4" />
                      }
                      isOpen={isOpenMap && isOpenMap['groups-kebab-toggle-4']}
                      isPlain
                      dropdownItems={dropdownItems}
                      id="grouped-notification-4"
                    />
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="20 minutes ago">
                    This is a warning notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="success" isRead>
                  <NotificationDrawerListItemHeader
                    variant="success"
                    title="Read success notification title"
                    srTitle="Success notification:"
                  >
                    <Dropdown
                      position={DropdownPosition.right}
                      direction={DropdownDirection.up}
                      onSelect={this.onSelect}
                      toggle={
                        <KebabToggle onToggle={isOpen => this.onToggle('groups-kebab-toggle-5', isOpen)} id="groups-kebab-toggle-5" />
                      }
                      isOpen={isOpenMap && isOpenMap['groups-kebab-toggle-5']}
                      isPlain
                      dropdownItems={dropdownItems}
                      id="grouped-notification-5"
                    />
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="30 minutes ago">
                    This is a success notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
              </NotificationDrawerList>
            </NotificationDrawerGroup>

            <NotificationDrawerGroup
              title="Second notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line."
              isExpanded={secondGroupExpanded}
              count={0}
              onExpand={this.toggleSecondDrawer}
              truncateTitle={1}
            >
              <NotificationDrawerList isHidden={!secondGroupExpanded}>
                <EmptyState variant={EmptyStateVariant.full}>
                  <EmptyStateIcon icon={SearchIcon} />
                  <Title headingLevel="h2" size="lg">
                    No alerts found
                  </Title>
                  <EmptyStateBody>
                    There are currently no critical alerts firing. There may be firing alerts of other severities or
                    silenced critical alerts however.
                  </EmptyStateBody>
                  <EmptyStatePrimary>
                    <Button variant="link">Action</Button>
                  </EmptyStatePrimary>
                </EmptyState>
              </NotificationDrawerList>
            </NotificationDrawerGroup>
            <NotificationDrawerGroup
              title="Third notification group"
              isExpanded={thirdGroupExpanded}
              count={2}
              onExpand={this.toggleThirdDrawer}
            >
              <NotificationDrawerList isHidden={!thirdGroupExpanded}>
                <NotificationDrawerListItem variant="info">
                  <NotificationDrawerListItemHeader
                    variant="info"
                    title="Unread info notification title"
                    srTitle="Info notification:"
                  >
                    <Dropdown
                      position={DropdownPosition.right}
                      onSelect={this.onSelect}
                      toggle={
                        <KebabToggle onToggle={isOpen => this.onToggle('groups-kebab-toggle-6', isOpen)} id="groups-kebab-toggle-6" />
                      }
                      isOpen={isOpenMap && isOpenMap['groups-kebab-toggle-6']}
                      isPlain
                      dropdownItems={dropdownItems}
                      id="grouped-notification-6"
                    />
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="5 minutes ago">
                    This is an info notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="danger">
                  <NotificationDrawerListItemHeader
                    variant="danger"
                    title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                    srTitle="Danger notification:"
                  >
                    <Dropdown
                      position={DropdownPosition.right}
                      onSelect={this.onSelect}
                      toggle={
                        <KebabToggle onToggle={isOpen => this.onToggle('groups-kebab-toggle-7', isOpen)} id="groups-kebab-toggle-7" />
                      }
                      isOpen={isOpenMap && isOpenMap['groups-kebab-toggle-7']}
                      isPlain
                      dropdownItems={dropdownItems}
                      id="grouped-notification-7"
                    />
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="10 minutes ago">
                    This is a danger notification description. This is a long description to show how the title will
                    wrap if it is long and wraps to multiple lines.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="warning" isRead>
                  <NotificationDrawerListItemHeader
                    variant="warning"
                    title="Read warning notification title"
                    srTitle="Warning notification:"
                  >
                    <Dropdown
                      position={DropdownPosition.right}
                      onSelect={this.onSelect}
                      toggle={
                        <KebabToggle onToggle={isOpen => this.onToggle('groups-kebab-toggle-8', isOpen)} id="groups-kebab-toggle-8" />
                      }
                      isOpen={isOpenMap && isOpenMap['groups-kebab-toggle-8']}
                      isPlain
                      dropdownItems={dropdownItems}
                      id="grouped-notification-8"
                    />
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="20 minutes ago">
                    This is a warning notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="success" isRead>
                  <NotificationDrawerListItemHeader
                    variant="success"
                    title="Read success notification title"
                    srTitle="Success notification:"
                  >
                    <Dropdown
                      position={DropdownPosition.right}
                      direction={DropdownDirection.up}
                      onSelect={this.onSelect}
                      toggle={
                        <KebabToggle onToggle={isOpen => this.onToggle('groups-kebab-toggle-9', isOpen)} id="groups-kebab-toggle-9" />
                      }
                      isOpen={isOpenMap && isOpenMap['groups-kebab-toggle-9']}
                      isPlain
                      dropdownItems={dropdownItems}
                      id="grouped-notification-9"
                    />
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="30 minutes ago">
                    This is a success notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
              </NotificationDrawerList>
            </NotificationDrawerGroup>
          </NotificationDrawerGroupList>
        </NotificationDrawerBody>
      </NotificationDrawer>
    );
  }
}
```

### Lightweight

```js
import React from 'react';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStatePrimary,
  EmptyStateVariant,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerGroup,
  NotificationDrawerGroupList,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Title
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

class LightweightNotificationDrawerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstGroupExpanded: false,
      secondGroupExpanded: true,
      thirdGroupExpanded: false
    };

    this.onFocus = id => {
      if (id) {
        const element = document.getElementById(id);
        element.focus();
      }
    };

    this.toggleFirstDrawer = (event, value) => {
      this.setState({
        firstGroupExpanded: value
      });
    };

    this.toggleSecondDrawer = (event, value) => {
      this.setState({
        secondGroupExpanded: value
      });
    };

    this.toggleThirdDrawer = (event, value) => {
      this.setState({
        thirdGroupExpanded: value
      });
    };
  }

  render() {
    const { firstGroupExpanded, secondGroupExpanded, thirdGroupExpanded } = this.state;

    return (
      <NotificationDrawer>
        <NotificationDrawerHeader customText="2 unread alerts" />
        <NotificationDrawerBody>
          <NotificationDrawerGroupList>
            <NotificationDrawerGroup
              title="First notification group"
              isExpanded={firstGroupExpanded}
              count={4}
              isRead
              onExpand={this.toggleFirstDrawer}
            >
              <NotificationDrawerList isHidden={!firstGroupExpanded}>
                <NotificationDrawerListItem variant="info">
                  <NotificationDrawerListItemHeader
                    variant="info"
                    title="Info notification title"
                    srTitle="Info notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="5 minutes ago">
                    This is an info notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="danger">
                  <NotificationDrawerListItemHeader
                    variant="danger"
                    title="Danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                    srTitle="Danger notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="10 minutes ago">
                    This is a danger notification description. This is a long description to show how the title will
                    wrap if it is long and wraps to multiple lines.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="warning">
                  <NotificationDrawerListItemHeader
                    variant="warning"
                    title="Warning notification title"
                    srTitle="Warning notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="20 minutes ago">
                    This is a warning notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="success">
                  <NotificationDrawerListItemHeader
                    variant="success"
                    title="Success notification title"
                    srTitle="Success notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="30 minutes ago">
                    This is a success notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
              </NotificationDrawerList>
            </NotificationDrawerGroup>
            <NotificationDrawerGroup
              title="Second notification group"
              isExpanded={secondGroupExpanded}
              count={4}
              isRead
              onExpand={this.toggleSecondDrawer}
            >
              <NotificationDrawerList isHidden={!secondGroupExpanded}>
                <NotificationDrawerListItem variant="info">
                  <NotificationDrawerListItemHeader
                    variant="info"
                    title="Info notification title w/action"
                    srTitle="Info notification:"
                  >
                    <Button variant="link">Action</Button>
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="5 minutes ago">
                    This is an info notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="danger">
                  <NotificationDrawerListItemHeader
                    variant="danger"
                    title="Danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                    srTitle="Danger notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="10 minutes ago">
                    This is a danger notification description. This is a long description to show how the title will
                    wrap if it is long and wraps to multiple lines.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="warning">
                  <NotificationDrawerListItemHeader
                    variant="warning"
                    title="Warning notification title"
                    srTitle="Warning notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="20 minutes ago">
                    This is a warning notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem variant="success">
                  <NotificationDrawerListItemHeader
                    variant="success"
                    title="Success notification title"
                    srTitle="Success notification:"
                  />
                  <NotificationDrawerListItemBody timestamp="30 minutes ago">
                    This is a success notification description.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
              </NotificationDrawerList>
            </NotificationDrawerGroup>
            <NotificationDrawerGroup
              title="Third notification group"
              isExpanded={thirdGroupExpanded}
              count={0}
              isRead
              onExpand={this.toggleThirdDrawer}
            >
              <NotificationDrawerList isHidden={!thirdGroupExpanded}>
                <EmptyState variant={EmptyStateVariant.full}>
                  <EmptyStateIcon icon={SearchIcon} />
                  <Title headingLevel="h2" size="lg">
                    No alerts found
                  </Title>
                  <EmptyStateBody>
                    There are currently no critical alerts firing. There may be firing alerts of other severities or
                    silenced critical alerts however.
                  </EmptyStateBody>
                  <EmptyStatePrimary>
                    <Button variant="link">Action</Button>
                  </EmptyStatePrimary>
                </EmptyState>
              </NotificationDrawerList>
            </NotificationDrawerGroup>
          </NotificationDrawerGroupList>
        </NotificationDrawerBody>
      </NotificationDrawer>
    );
  }
}
```
