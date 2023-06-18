export class Lawyer {
    Id: number;
    Name: string;
    Email: string;
    UserName: string;
    Mobile: string;
    AccountActive: boolean;
    Location:string;
    
    constructor(id: number, name: string, email: string, userName: string, mobile: string, accountActive: boolean,location:string) {
      this.Id = id;
      this.Name = name;
      this.Email = email;
      this.UserName = userName;
      this.Mobile = mobile;
      this.AccountActive = accountActive;
      this.Location = 'Bengaluru'
    }
  }
  