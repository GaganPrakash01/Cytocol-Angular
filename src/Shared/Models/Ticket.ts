
export class Ticket {
  id:number;
  Title: string;
  Description: string;
  CreatedAt: Date;
  IsResolved: boolean;
  UserId: number;
  ImagePath: string;
  LawyerId: number;
  ImageDataUrl!: string;
  IsProcessing : boolean;

  constructor() {
    this.Title = '';
    this.Description = '';
    this.UserId = 1;
    this.ImagePath = '';
  this.id = 0;
    this.CreatedAt = new Date();
    this.IsResolved = false;
    this.LawyerId = 0;
    this.IsProcessing = false;
  }
}
