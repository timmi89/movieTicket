describe('Contact', function() {

  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Rita","Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the full Name to a contact", function() {
    var testContact = new Contact("Bill","Clinton");
    expect(testContact.fullName()).to.equal("Bill Clinton");
  });

});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main St", "Test City", "Test State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });


  it("adds the full address[street, city, state] to an address", function() {
    var testAddress =  new Address("123 Main St", "Test City", "Test State");
    expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
  });
});


// describe('Address', function() {
//   it("creates a new address with the given specifications", function() {
//     var testAddress = new Address("123 Main St", "Test City","Test State");
//     expect(testAddress.street).to.equal("123 Main St");
//     expect(testAddress.city).to.equal("Test City");
//     expect(testAddress.state).to.equal("Test State");
//   });
