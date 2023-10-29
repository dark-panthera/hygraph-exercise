import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate"
})
export class TruncatePipe implements PipeTransform {
  private ellipsis: string = "...";

  transform(value: string, limit: number = 50, completeWords = false): string {
    if (completeWords) {
      limit = value.substring(0, limit).lastIndexOf(" ");
    }

    if (!value) return "";

    return value.length > limit
      ? `${value.substring(0, limit)}${this.ellipsis}`
      : value;
  }
}
