import type { ActivityComponentType } from "@stackflow/react";

import { AppScreen } from "@stackflow/plugin-basic-ui";

import { useSnackbarAdapter } from "@seed-design/react";
import { receive } from "@stackflow/compat-await-push";
import { List, ListItem } from "../components/List";
import { DialogPushTrigger } from "../design-system/stackflow/DialogPushTrigger";
import { ActionButton } from "../design-system/ui/action-button";
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../design-system/ui/alert-dialog";
import { Snackbar } from "../design-system/ui/snackbar";
import { useStepDialog } from "../design-system/util/use-step-dialog";
import { useFlow } from "../stackflow";
import { actionSheetCallback } from "./ActivityActionSheet";
import { extendedActionSheetCallback } from "./ActivityExtendedActionSheet";

const ActivityHome: ActivityComponentType = () => {
  const { push } = useFlow();
  const { dialogProps } = useStepDialog();
  const snackbarAdapter = useSnackbarAdapter();

  return (
    <AppScreen appBar={{ title: "Home" }}>
      <div
        style={
          {
            overflow: "auto",
            height: "calc(100vh - var(--stackflow-plugin-basic-ui-app-bar-height))",
          } as React.CSSProperties
        }
      >
        <List>
          <ListItem onClick={() => push("ActivityActionButton", {})} title="ActionButton" />
          <ListItem onClick={() => push("ActivityActionChip", {})} title="ActionChip" />
          <ListItem onClick={() => push("ActivityControlChip", {})} title="ControlChip" />
          <ListItem onClick={() => push("ActivityHelpBubble", {})} title="HelpBubble" />
          <ListItem onClick={() => push("ActivityLayerBar", {})} title="LayerBar" />
          <ListItem onClick={() => push("ActivityTransparentBar", {})} title="TransparentBar" />

          <AlertDialogRoot {...dialogProps}>
            <AlertDialogTrigger asChild>
              <ListItem title="AlertDialog (step)" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>제목</AlertDialogTitle>
                <AlertDialogDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <ActionButton onClick={() => push("ActivityActionChip", {})}>확인</ActionButton>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogRoot>

          <ListItem
            onClick={async () => {
              const result = await receive<any>(push("ActivityAlertDialog", {}));
              console.log(result.message);
            }}
            title="AlertDialog (activity)"
          />
          <ListItem onClick={() => push("ActivityBottomSheet", {})} title="BottomSheet" />
          <DialogPushTrigger
            callbackActivity={actionSheetCallback}
            params={{}}
            onPop={(result) => {
              console.log(result?.action);
            }}
          >
            <ListItem title="ActionSheet" />
          </DialogPushTrigger>
          <DialogPushTrigger
            callbackActivity={extendedActionSheetCallback}
            params={{}}
            onPop={(result) => {
              console.log(result?.action);
            }}
          >
            <ListItem title="ExtendedActionSheet" />
          </DialogPushTrigger>
          <ListItem
            onClick={() =>
              snackbarAdapter.create({
                render: () => <Snackbar message="Disco Party!" actionLabel="Dance" />,
              })
            }
            title="Snackbar"
          />
          <ListItem
            onClick={() =>
              snackbarAdapter.create({
                render: () => (
                  <Snackbar variant="positive" message="Disco Party!" actionLabel="Dance" />
                ),
              })
            }
            title="Snackbar (positive)"
          />
          <ListItem
            onClick={() =>
              snackbarAdapter.create({
                render: () => (
                  <Snackbar variant="danger" message="Disco Party!" actionLabel="Dance" />
                ),
              })
            }
            title="Snackbar (danger)"
          />
        </List>
      </div>
    </AppScreen>
  );
};

export default ActivityHome;
