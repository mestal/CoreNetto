import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpaces implements PipeTransform {

    transform(value: string, character: string, character2: string): string {
        return value.replace(character, ' ').replace(character2, ' ');
    }
}