import { EventEmitter, Input, Output } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

export abstract class AppBaseComponent<TModel> implements ControlValueAccessor {
    @Input() disabled: boolean | undefined;
    @Input() name: string | undefined;
    @Input() required: boolean | undefined;

    @Output() readonly changed = new EventEmitter<any>();

    private model!: TModel;

    get ngModel(): TModel {
        return this.model;
    }

    set ngModel(model: TModel) {
        if (model === this.model) {
            return;
        }

        this.model = model;
        this.onChange(model);
    }

    // tslint:disable-next-line:no-empty
    onChange = (_: any) => { };

    // tslint:disable-next-line:no-empty
    onTouched = () => { };

    registerOnChange(fn: any): void { this.onChange = fn; }

    registerOnTouched(fn: any): void { this.onTouched = fn; }

    // tslint:disable-next-line:no-empty
    setDisabledState(_: boolean): void { }

    writeValue(model: any): void {
        this.ngModel = model;
        this.changed.emit(model);
    }
}
