const orm = require("./config/orm.js");

// Console log all the party names (parties).
// orm.selectAll('parties');


// Console log all the client names (clients).
// orm.selectAll('clients');

// Console log all the parties that have a party-type of grown-up.
// orm.selectWhere('parties', 'party_type', 'grown-up');

// Console log all the clients and their parties.
orm.findWhoHasMost('id','client_id','clients','parties')


