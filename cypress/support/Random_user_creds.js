
export function Random_user_creds_generator() {
    return cy.fixture("login_users").then((users) => {
      const random_no = Math.floor(Math.random() * users.length);
      return users[random_no];
    });
  }