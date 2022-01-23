const Client = require("./client")
class ElectrumClient extends Client{
    constructor(port, host, protocol, options){
        super(port, host, protocol, options)
    }
    onClose(){
        super.onClose()
        const list = [
            'blockchain.asset.subscribe',
            'blockchain.headers.subscribe',
            'blockchain.scripthash.subscribe'
        ]
        list.forEach(event => this.subscribe.removeAllListeners(event))
    }
    blockchain_asset_check_tag(h160, asset){
        return this.request('blockchain.asset.check_tag', [h160, asset])
    }
    blockchain_asset_all_tags(h160){
        return this.request('blockchain.asset.all_tags', [h160])
    }
    blockchain_asset_is_frozen(asset){
        return this.request('blockchain.asset.is_frozen', [asset])
    }
    blockchain_asset_validator_string(asset){
        return this.request('blockchain.asset.validator_string', [asset])
    }
    blockchain_asset_restricted_associations(asset){
        return this.request('blockchain.asset.restricted_associations', [asset])
    }
    blockchain_asset_broadcasts(asset){
        return this.request('blockchain.asset.broadcasts', [asset])
    }
    blockchain_scripthash_get_asset_balance(scripthash){
        return this.request('blockchain.scripthash.get_asset_balance', [scripthash])
    }
    blockchain_scripthash_listassets(scripthash){
        return this.request('blockchain.scripthash.listassets', [scripthash])
    }
    blockchain_asset_get_meta(asset){
        return this.request('blockchain.asset.get_meta', [asset])
    }
    blockchain_asset_subscribe(asset){
        return this.request('blockchain.asset.subscribe', [asset])
    }
    blockchain_asset_unsubscribe(asset){
        return this.request('blockchain.asset.unsubscribe', [asset])
    }
    blockchain_block_header(height, checkpoint=0){
        return this.request('blockchain.block.header', [height, checkpoint])
    }
    blockchain_block_headers(start, count, checkpoint=0){
        return this.request('blockchain.block.headers', [start, count, checkpoint])
    }
    blockchain_estimatefee(blocks){
        return this.request('blockchain.estimatefee', [blocks])
    }
    blockchain_headers_subscribe(){
        return this.request('blockchain.headers.subscribe', [])
    }
    blockchain_relayfee(){
        return this.request('blockchain.relayfee', [])
    }
    blockchain_scripthash_get_balance(scripthash){
        return this.request('blockchain.scripthash.get_balance', [scripthash])
    }
    blockchain_scripthash_get_history(scripthash){
        return this.request('blockchain.scripthash.get_history', [scripthash])
    }
    blockchain_scripthash_get_mempool(scripthash){
        return this.request('blockchain.scripthash.get_mempool', [scripthash])
    }
    blockchain_scripthash_listunspent(scripthash){
        return this.request('blockchain.scripthash.listunspent', [scripthash])
    }
    blockchain_scripthash_subscribe(scripthash){
        return this.request('blockchain.scripthash.subscribe', [scripthash])
    }
    blockchain_scripthash_unsubscribe(scripthash){
        return this.request('blockchain.scripthash.unsubscribe', [scripthash])
    }
    blockchain_transaction_broadcast(raw){
        return this.request('blockchain.transaction.broadcast', [raw])
    }
    blockchain_transaction_get(tx_hash, verbose=false){
        return this.request('blockchain.transaction.get', [tx_hash, verbose])
    }
    blockchain_transaction_get_merkle(tx_hash, height){
        return this.request('blockchain.transaction.get_merkle', [tx_hash, height])
    }
    blockchain_transaction_id_from_pos(height, tx_pos, merkle=false){
        return this.request('blockchain.transaction.id_from_pos', [height, tx_pos, merkle])
    }
    mempool_get_fee_histogram(){
        return this.request('mempool.get_fee_histogram', [])
    }
    server_banner(){
        return this.request('server.banner', [])
    }
    server_donation_address(){
        return this.request('server.donation_address', [])
    }
    server_features(){
        return this.request('server.features', [])
    }
    server_peers_subscribe(){
        return this.request('server.peers.subscribe', [])
    }
    server_ping(){
        return this.request('server.ping', [])
    }
    server_version(name='', version=''){
        return this.request('server.version', [name, version])
    }
    
}

module.exports = ElectrumClient
