import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postpipe'
})
export class PostpipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(posts: any[], showPostsList: boolean): any[] {
    if (showPostsList) {
      return posts;
    } else {
      return [];
    }
  }
}
