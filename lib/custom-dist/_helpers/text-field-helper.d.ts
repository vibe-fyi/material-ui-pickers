/// <reference types="react" />
/// <reference types="styled-jsx" />
import { DatePickerProps } from '..';
import { IUtils } from '@date-io/core/IUtils';
import { ParsableDate } from '../constants/prop-types';
import { BasePickerProps } from '../typings/BasePicker';
export declare const getDisplayDate: (
  value: ParsableDate,
  format: string,
  utils: IUtils<any>,
  isEmpty: boolean,
  {
    invalidLabel,
    emptyLabel,
    labelFunc,
  }: Pick<
    BasePickerProps,
    | 'onError'
    | 'variant'
    | 'open'
    | 'disabled'
    | 'format'
    | 'orientation'
    | 'readOnly'
    | 'onClose'
    | 'onAccept'
    | 'onOpen'
    | 'initialFocusedDate'
    | 'autoOk'
    | 'labelFunc'
    | 'invalidLabel'
    | 'emptyLabel'
    | 'disableToolbar'
    | 'ToolbarComponent'
  >
) => string;
export interface BaseValidationProps {
  /**
   * Message, appearing when date cannot be parsed
   * @default 'Invalid Date Format'
   */
  invalidDateMessage?: React.ReactNode;
}
export interface DateValidationProps extends BaseValidationProps {
  /**
   * Error message, shown if date is less then minimal date
   * @default 'Date should not be before minimal date'
   */
  minDateMessage?: React.ReactNode;
  /**
   * Error message, shown if date is more then maximal date
   * @default 'Date should not be after maximal date'
   */
  maxDateMessage?: React.ReactNode;
}
export declare const validate: (
  value: ParsableDate,
  utils: IUtils<any>,
  {
    maxDate,
    minDate,
    disablePast,
    disableFuture,
    maxDateMessage,
    minDateMessage,
    invalidDateMessage,
    strictCompareDates,
  }: Pick<
    DatePickerProps,
    | 'children'
    | 'ref'
    | 'label'
    | 'select'
    | 'style'
    | 'title'
    | 'value'
    | 'className'
    | 'innerRef'
    | 'key'
    | 'defaultChecked'
    | 'defaultValue'
    | 'suppressContentEditableWarning'
    | 'suppressHydrationWarning'
    | 'accessKey'
    | 'contentEditable'
    | 'contextMenu'
    | 'dir'
    | 'draggable'
    | 'hidden'
    | 'id'
    | 'lang'
    | 'placeholder'
    | 'slot'
    | 'spellCheck'
    | 'tabIndex'
    | 'radioGroup'
    | 'role'
    | 'about'
    | 'datatype'
    | 'inlist'
    | 'prefix'
    | 'property'
    | 'resource'
    | 'typeof'
    | 'vocab'
    | 'autoCapitalize'
    | 'autoCorrect'
    | 'autoSave'
    | 'color'
    | 'itemProp'
    | 'itemScope'
    | 'itemType'
    | 'itemID'
    | 'itemRef'
    | 'results'
    | 'security'
    | 'unselectable'
    | 'inputMode'
    | 'is'
    | 'aria-activedescendant'
    | 'aria-atomic'
    | 'aria-autocomplete'
    | 'aria-busy'
    | 'aria-checked'
    | 'aria-colcount'
    | 'aria-colindex'
    | 'aria-colspan'
    | 'aria-controls'
    | 'aria-current'
    | 'aria-describedby'
    | 'aria-details'
    | 'aria-disabled'
    | 'aria-dropeffect'
    | 'aria-errormessage'
    | 'aria-expanded'
    | 'aria-flowto'
    | 'aria-grabbed'
    | 'aria-haspopup'
    | 'aria-hidden'
    | 'aria-invalid'
    | 'aria-keyshortcuts'
    | 'aria-label'
    | 'aria-labelledby'
    | 'aria-level'
    | 'aria-live'
    | 'aria-modal'
    | 'aria-multiline'
    | 'aria-multiselectable'
    | 'aria-orientation'
    | 'aria-owns'
    | 'aria-placeholder'
    | 'aria-posinset'
    | 'aria-pressed'
    | 'aria-readonly'
    | 'aria-relevant'
    | 'aria-required'
    | 'aria-roledescription'
    | 'aria-rowcount'
    | 'aria-rowindex'
    | 'aria-rowspan'
    | 'aria-selected'
    | 'aria-setsize'
    | 'aria-sort'
    | 'aria-valuemax'
    | 'aria-valuemin'
    | 'aria-valuenow'
    | 'aria-valuetext'
    | 'dangerouslySetInnerHTML'
    | 'onCopy'
    | 'onCopyCapture'
    | 'onCut'
    | 'onCutCapture'
    | 'onPaste'
    | 'onPasteCapture'
    | 'onCompositionEnd'
    | 'onCompositionEndCapture'
    | 'onCompositionStart'
    | 'onCompositionStartCapture'
    | 'onCompositionUpdate'
    | 'onCompositionUpdateCapture'
    | 'onFocus'
    | 'onFocusCapture'
    | 'onBlur'
    | 'onBlurCapture'
    | 'onChange'
    | 'onChangeCapture'
    | 'onBeforeInput'
    | 'onBeforeInputCapture'
    | 'onInput'
    | 'onInputCapture'
    | 'onReset'
    | 'onResetCapture'
    | 'onSubmit'
    | 'onSubmitCapture'
    | 'onInvalid'
    | 'onInvalidCapture'
    | 'onLoad'
    | 'onLoadCapture'
    | 'onError'
    | 'onErrorCapture'
    | 'onKeyDown'
    | 'onKeyDownCapture'
    | 'onKeyPress'
    | 'onKeyPressCapture'
    | 'onKeyUp'
    | 'onKeyUpCapture'
    | 'onAbort'
    | 'onAbortCapture'
    | 'onCanPlay'
    | 'onCanPlayCapture'
    | 'onCanPlayThrough'
    | 'onCanPlayThroughCapture'
    | 'onDurationChange'
    | 'onDurationChangeCapture'
    | 'onEmptied'
    | 'onEmptiedCapture'
    | 'onEncrypted'
    | 'onEncryptedCapture'
    | 'onEnded'
    | 'onEndedCapture'
    | 'onLoadedData'
    | 'onLoadedDataCapture'
    | 'onLoadedMetadata'
    | 'onLoadedMetadataCapture'
    | 'onLoadStart'
    | 'onLoadStartCapture'
    | 'onPause'
    | 'onPauseCapture'
    | 'onPlay'
    | 'onPlayCapture'
    | 'onPlaying'
    | 'onPlayingCapture'
    | 'onProgress'
    | 'onProgressCapture'
    | 'onRateChange'
    | 'onRateChangeCapture'
    | 'onSeeked'
    | 'onSeekedCapture'
    | 'onSeeking'
    | 'onSeekingCapture'
    | 'onStalled'
    | 'onStalledCapture'
    | 'onSuspend'
    | 'onSuspendCapture'
    | 'onTimeUpdate'
    | 'onTimeUpdateCapture'
    | 'onVolumeChange'
    | 'onVolumeChangeCapture'
    | 'onWaiting'
    | 'onWaitingCapture'
    | 'onAuxClick'
    | 'onAuxClickCapture'
    | 'onClick'
    | 'onClickCapture'
    | 'onContextMenu'
    | 'onContextMenuCapture'
    | 'onDoubleClick'
    | 'onDoubleClickCapture'
    | 'onDrag'
    | 'onDragCapture'
    | 'onDragEnd'
    | 'onDragEndCapture'
    | 'onDragEnter'
    | 'onDragEnterCapture'
    | 'onDragExit'
    | 'onDragExitCapture'
    | 'onDragLeave'
    | 'onDragLeaveCapture'
    | 'onDragOver'
    | 'onDragOverCapture'
    | 'onDragStart'
    | 'onDragStartCapture'
    | 'onDrop'
    | 'onDropCapture'
    | 'onMouseDown'
    | 'onMouseDownCapture'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseMove'
    | 'onMouseMoveCapture'
    | 'onMouseOut'
    | 'onMouseOutCapture'
    | 'onMouseOver'
    | 'onMouseOverCapture'
    | 'onMouseUp'
    | 'onMouseUpCapture'
    | 'onSelect'
    | 'onSelectCapture'
    | 'onTouchCancel'
    | 'onTouchCancelCapture'
    | 'onTouchEnd'
    | 'onTouchEndCapture'
    | 'onTouchMove'
    | 'onTouchMoveCapture'
    | 'onTouchStart'
    | 'onTouchStartCapture'
    | 'onPointerDown'
    | 'onPointerDownCapture'
    | 'onPointerMove'
    | 'onPointerMoveCapture'
    | 'onPointerUp'
    | 'onPointerUpCapture'
    | 'onPointerCancel'
    | 'onPointerCancelCapture'
    | 'onPointerEnter'
    | 'onPointerEnterCapture'
    | 'onPointerLeave'
    | 'onPointerLeaveCapture'
    | 'onPointerOver'
    | 'onPointerOverCapture'
    | 'onPointerOut'
    | 'onPointerOutCapture'
    | 'onGotPointerCapture'
    | 'onGotPointerCaptureCapture'
    | 'onLostPointerCapture'
    | 'onLostPointerCaptureCapture'
    | 'onScroll'
    | 'onScrollCapture'
    | 'onWheel'
    | 'onWheelCapture'
    | 'onAnimationStart'
    | 'onAnimationStartCapture'
    | 'onAnimationEnd'
    | 'onAnimationEndCapture'
    | 'onAnimationIteration'
    | 'onAnimationIterationCapture'
    | 'onTransitionEnd'
    | 'onTransitionEndCapture'
    | 'variant'
    | 'error'
    | 'name'
    | 'margin'
    | 'size'
    | 'open'
    | 'disabled'
    | 'type'
    | 'format'
    | 'orientation'
    | 'autoFocus'
    | 'autoComplete'
    | 'readOnly'
    | 'required'
    | 'rows'
    | 'fullWidth'
    | 'onMonthChange'
    | 'leftArrowIcon'
    | 'rightArrowIcon'
    | 'leftArrowButtonProps'
    | 'rightArrowButtonProps'
    | 'onClose'
    | 'onAccept'
    | 'okLabel'
    | 'cancelLabel'
    | 'clearLabel'
    | 'todayLabel'
    | 'clearable'
    | 'showTodayButton'
    | 'DialogProps'
    | 'PopoverProps'
    | 'hiddenLabel'
    | 'InputProps'
    | 'inputProps'
    | 'FormHelperTextProps'
    | 'helperText'
    | 'InputLabelProps'
    | 'inputRef'
    | 'multiline'
    | 'rowsMax'
    | 'SelectProps'
    | 'onOpen'
    | 'minDate'
    | 'maxDate'
    | 'disablePast'
    | 'disableFuture'
    | 'renderDay'
    | 'allowKeyboardControl'
    | 'shouldDisableDate'
    | 'loadingIndicator'
    | 'inputVariant'
    | 'TextFieldComponent'
    | 'initialFocusedDate'
    | 'autoOk'
    | 'minDateMessage'
    | 'maxDateMessage'
    | 'invalidDateMessage'
    | 'labelFunc'
    | 'invalidLabel'
    | 'emptyLabel'
    | 'disableToolbar'
    | 'ToolbarComponent'
    | 'strictCompareDates'
    | 'animateYearScrolling'
    | 'onYearChange'
  >
) => import('react').ReactNode;
export declare function pick12hOr24hFormat(
  userFormat: string | undefined,
  ampm: boolean | undefined,
  formats: {
    '12h': string;
    '24h': string;
  }
): string;
export declare function makeMaskFromFormat(format: string, numberMaskChar: string): string;
export declare const maskedDateFormatter: (
  mask: string,
  numberMaskChar: string,
  refuse: RegExp
) => (value: string) => string;
