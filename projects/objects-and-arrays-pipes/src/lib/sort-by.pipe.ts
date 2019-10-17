import { Pipe, PipeTransform } from "@angular/core";
import * as moment_ from "moment";
import { Utils } from "./utils";
const moment = moment_;

@Pipe({
  name: "sortBy"
})
export class SortByPipe implements PipeTransform {
  /** Return an array (input) sorter  by given atribute(s),
   * @param  input array input
   * @param  attrs array of atributes of attributes by which it is sorted,  use - if you want it to be in descending order
   * @param  type array of atributes types ['string','number','date'] (they are the only types currently supported),
   * this fields must be the same size as attrs
   */
  transform(input: Array<any>, attrs: Array<string> = []): Array<any> {
    if (attrs.length) {
      input = input.sort(fieldSorter(attrs));
    }
    return input;
  }
}
export function fieldSorter(fields: string[]) {
  return (a, b) =>
    fields
      .map(field => {
        let dir = 1;
        if (field[0] === "-") {
          dir = -1;
          field = field.substring(1);
        }
        const aVal = Utils.getDeepObjectValue(field, a);
        const bVal = Utils.getDeepObjectValue(field, b);
        const aType = typeof aVal;
        const bType = typeof bVal;
        if (aType === bType) {
          switch (aType) {
            case "string":
              return dir === 1
                ? aVal.localeCompare(bVal)
                : bVal.localeCompare(aVal);
              break;
            case "number":
              return dir === 1 ? aVal - bVal : bVal - aVal;
              break;
            case "object":
              if (aVal instanceof Date) {
                return moment(aVal).isAfter(bVal)
                  ? dir
                  : moment(bVal).isAfter(aVal)
                  ? -dir
                  : 0;
              } else {
                throw `OrderBy Pipe does not support ${aType} type`;
              }
			  break;
			  case "boolean":
              return dir === 0 ? aVal - bVal : bVal - aVal;
              break;
            default:
              throw `OrderBy Pipe does not support ${aType} type`;
              break;
          }
        }
      })
      .reduce((p, n) => (p ? p : n), 0);
}
