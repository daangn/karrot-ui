import "@seed-design/stylesheet/screen.css";

import { type ScreenVariantProps, screen } from "@seed-design/recipe/screen";
import { useMounted } from "@stackflow/react-ui-core";
import { AppScreenProvider, useAppScreen } from "./useAppScreen";

export type AppScreenProps = {
  preventSwipeBack?: boolean;
  appBar?: React.ReactNode;
  theme: ScreenVariantProps["theme"];
  children: React.ReactNode;
};

export const AppScreen: React.FC<AppScreenProps> = ({
  preventSwipeBack,
  appBar,
  theme,
  children,
}) => {
  const hasAppBar = !!appBar;
  const mounted = useMounted();
  const api = useAppScreen({
    theme,
    preventSwipeBack,
    activityEnterStyle: undefined, // TODO: Implement activityEnterStyle
    modalPresentationStyle: undefined, // TODO: Implement modalPresentationStyle
    hasAppBar,
  });
  const { activity, refs, rootProps, dimProps, layerProps, edgeProps } = api;
  const classNames = screen({ theme, hasAppBar });

  return (
    <div
      ref={refs.appScreen}
      className={classNames.root}
      {...rootProps}
      data-stackflow-component-name="AppScreen"
      data-stackflow-activity-id={mounted ? activity?.id : undefined}
      data-stackflow-activity-is-active={mounted ? activity?.isActive : undefined}
    >
      <div className={classNames.dim} ref={refs.dim} {...dimProps} />
      <AppScreenProvider value={api}>
        {appBar}
        <div ref={refs.layer} key={activity?.id} className={classNames.layer} {...layerProps}>
          {children}
        </div>
      </AppScreenProvider>
      <div ref={refs.edge} className={classNames.edge} {...edgeProps} />
    </div>
  );
};
