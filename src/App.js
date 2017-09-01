import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
   state = {
    contacts: [
      {
        "id": "ryan",
        "name": "George Beard & Harold Hutchins",
        "email": "pranksters@jerome.howitz.elementary.com",
        "avatarURL": "http://www.dreamworks.com/captainunderpants/assets/media/story/kids.png"
      },
      {
        "id": "michael",
        "name": "Sir-Stinks-A-Lot",
        "email": "mrmeaner@jerome.howitz.elementary.edu.com",
        "avatarURL": "https://pbs.twimg.com/media/CM8ffxrWUAE3o45.jpg"
      },
      {
        "id": "tyler",
        "name": "Benjamin Krupp",
        "email": "b.krupp@jerome.howitz.elementary.edu.com",
        "avatarURL": "https://vignette1.wikia.nocookie.net/villains/images/1/11/20121004132555%21C_krupp.png/revision/latest?cb=20140506010305"
      },
      {
        "id": "ice",
        "name": "Professor Pippy P. Poopypants",
        "email": "tippytinkletrousers@madscientists.com",
        "avatarURL": "https://vignette3.wikia.nocookie.net/dreamworks/images/6/66/IMG_1028.png/revision/latest?cb=20170525220227"
      },
      {
          "id": "ice2",
          "name": "Captain Underpants",
          "email": "captainunderpants@superheroes.com",
          "avatarURL": "https://vignette3.wikia.nocookie.net/captainunderpants/images/d/df/Captain_underpants_flying.png/revision/latest?cb=20170218200414"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState ((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id )
    }))
  }

  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
        />
      </div>
    )
  }
}

export default App;
