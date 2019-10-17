import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from './utils';

@Pipe({
	name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
	/**
	 * Return an array where each different value of attr is an property of this, and they values are an sub array of the input;
	 * @param input array to group
	 * @param attr attribute by which the input is grouped
	 * @return [{group:'strawberries',items:[...]}]
	 */
	transform(input: any[], attr: any): any {
		const objTmp = input.reduce((obj, item) => {
			const  value = Utils.getDeepObjectValue(attr,item);
			obj[value] = obj[value] || [];
			obj[value].push(item);
			return obj;
		}, {});

		return Object.keys(objTmp).map(function (key) {
			return { group: key, items: objTmp[key] };
		});
	}
	
}
