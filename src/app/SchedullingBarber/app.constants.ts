export class AppConstants {
  public static get baseServer(): string {
    return 'localhost:8080'
  }

  public static get baseLogin(): string {
    return this.baseServer + '/auth/authenticate'
  }
}
