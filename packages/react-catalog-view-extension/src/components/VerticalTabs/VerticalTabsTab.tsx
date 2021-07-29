import * as React from 'react';
import { css } from '@patternfly/react-styles';
import textUtilities from '@patternfly/react-styles/css/utilities/Text/text';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';

export interface VerticalTabsTabProps extends Omit<React.HTMLProps<HTMLLIElement>, 'title'> {
  /** Child tab nodes (VerticalTabsTab's) */
  children?: React.ReactNode;
  /** Additional css classes */
  className?: string;
  /** Title for the tab */
  title?: string | React.ReactNode;
  /** Title wrap style */
  wrapStyle?: 'wrap' | 'truncate' | 'nowrap';
  /** Flag if this is the active tab */
  active?: boolean;
  /** Flag if a descendant tab is active (used only in restrictTabs mode) */
  hasActiveDescendant?: boolean;
  /** Flag to force show the tab (if parent tab is shown, used only in restrictTabs mode) */
  shown?: boolean;
  /** Callback function when the tab is activated */
  onActivate?: () => void;
  /** HREF location */
  href?: string;
  /** Flag to add external link icon to the tab */
  isExternalLink?: string;
}

export const VerticalTabsTab: React.FunctionComponent<VerticalTabsTabProps> = ({
  children = null,
  className = '',
  title = null,
  wrapStyle = 'wrap',
  active = false,
  hasActiveDescendant = false,
  shown = false,
  onActivate = null,
  href,
  isExternalLink,
  ...props
}: VerticalTabsTabProps) => {
  const classes = css('vertical-tabs-pf-tab', { active, 'active-descendant': hasActiveDescendant, shown }, className);

  const linkClasses = css(
    {
      'no-wrap': wrapStyle === 'nowrap',
      truncate: wrapStyle === 'truncate'
    },
    href && textUtilities.linkColor
  );

  const handleActivate = (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    if (onActivate) {
      onActivate();
    }
  };

  return (
    <li className={classes} {...props}>
      <a className={linkClasses} onClick={e => handleActivate(e)} href={href}>
        {title} {isExternalLink && <ExternalLinkAltIcon />}
      </a>
      {children}
    </li>
  );
};
VerticalTabsTab.displayName = 'VerticalTabsTab';
