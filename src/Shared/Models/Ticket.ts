
export class Ticket {

  Title: string;
  Description: string;
  CreatedAt: Date;
  IsResolved: boolean;
  UserId: number;
  ImagePath: string;
  LawyerId: number;
  ImageDataUrl!: string;

  constructor() {
    this.Title = '';
    this.Description = '';
    this.UserId = 1;
    this.ImagePath = '';

    this.CreatedAt = new Date();
    this.IsResolved = false;
    this.LawyerId = 0;
  }
}
