describe('Pruebas de inicio de sesión en Strix', () => {
  beforeEach(() => {
    cy.visit('https://clientes.test.aws.consumer.strix.com.ar');
  });

  it('Debe iniciar sesión exitosamente con credenciales válidas', () => {
    cy.get('input[type="email"]').type('usuario_nuevo@test.com'); 
    cy.get('input[type="password"]').type('hola1234@');
    cy.get('button').contains('Iniciar sesión').click();

    cy.url().should('not.include', 'login');
    cy.contains('Disfruta de nuestros servicios gratuitos').should('be.visible');
  });

  it('Debe fallar el inicio de sesión con contraseña incorrecta', () => {
    cy.get('input[type="email"]').type('usuario_nuevo@test.com'); 
    cy.get('input[type="password"]').type('ContraseñaIncorrecta');
    cy.get('button').contains('Iniciar sesión').click();

    cy.contains('Email o contraseña incorrectos.').should('be.visible');

  });
});
