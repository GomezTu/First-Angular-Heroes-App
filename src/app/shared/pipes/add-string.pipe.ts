import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'addString'})
export class AddStringPipe implements PipeTransform {
    transform(value: string, add: string) : string {
        return value.concat(' ').concat(add);
    }
}