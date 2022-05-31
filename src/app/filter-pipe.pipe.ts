import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {
  transform(value: any[], selectedStatuts: string): any[] {
    if (selectedStatuts.length != 0) {
      let newServers = [];
      for (const serv of value) {
        if (serv['statut'] == selectedStatuts) newServers.push(serv);
      }
      return newServers;
    } else return value;
  }

}
