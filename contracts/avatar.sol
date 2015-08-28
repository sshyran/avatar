contract owned {
    address owner;
    function owned() { owner = msg.sender; }
    function transfer(address to) returns (bool success){
        if (isOwner()) {
            owner = to;
            return true;
        } else {
            return false;
        }
    }
    function isOwner () constant returns(bool) {
        return msg.sender == owner;
    }
    
    function isOwner (address addr) constant returns(bool) {
        return addr == owner;
    }
    
    modifier onlyowner { if (msg.sender == owner) _ }
}

contract mortal is owned {
    function kill() onlyowner returns (bool){
        suicide(owner);
        return true;
    }
}

contract keyvalue is owned, mortal {
    mapping (bytes32 => string) keys;
    
    function get(bytes32 key) constant returns (string) {
        return keys[key];
    }
    function set(bytes32 key, string value) onlyowner returns(string) {
        keys[key] = value;
        return keys[key];
    }
}

contract Avatar is keyvalue {

}


contract LinkedListAddressAddress is owned, mortal {
    
    struct Item {
        bool exists;
        address prev;
        address next;
        address value;
    }
    
    address head;
    address  tail;
    uint length;
    mapping( address => Item) items;
    
    function getHead () constant returns (address) { return head; }
    function getTail () constant returns (address) { return tail; }
    function getLength () constant returns (uint) { return length; }
    function getItem(address id) constant returns(address[] item) {
        item[0] = items[id].prev;
        item[1] = items[id].next;
        item[2] = items[id].value;
        return item;
    }
    
    modifier exist (address id, bool flag) { if (items[id].exists == flag) _ }
    
    function add (address addr, address value) exist(addr, false) internal returns(address) {
        address prev = head;
        items[prev].next = addr;
        items[addr] = Item( true, prev, address(0), value );
        head = addr;
        length++;
        
        if (tail == address(0)) { tail = addr; }
        return addr;
    }
    
    function remove(address addr) exist(addr, true) internal returns(bool) {
        if (head == addr) {
            head = items[addr].prev;
        }
        
        if (tail == addr) {
            tail = items[addr].next;
        }
        
        if (items[addr].prev != address(0)) {
            items[items[addr].prev].next = items[addr].next;
        }
        
        if (items[addr].next != address(0)) {
            items[items[addr].next].prev = items[addr].prev;
        }
        
        length--;
        
        delete items[addr];
        return true;
    }
}


contract AvatarAggregator is LinkedListAddressAddress {
    
    function create () returns(address contractAddress) {
        Avatar avatar = new Avatar();
        avatar.transfer( msg.sender );
        return add( msg.sender, address(avatar) );
    }
    
    function register (address avatar) returns (address contractAddress) {
        return add( msg.sender, address(avatar) );
    }

    function deregister () returns (bool success){
        return remove( msg.sender );
    }
}
