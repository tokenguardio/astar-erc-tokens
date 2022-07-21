import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result} from './support'
import * as v1 from './v1'
import * as v3 from './v3'
import * as v4 from './v4'
import * as v9 from './v9'
import * as v12 from './v12'
import * as v13 from './v13'
import * as v15 from './v15'
import * as v16 from './v16'
import * as v17 from './v17'
import * as v23 from './v23'

export class AssetsApproveTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.approve_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Approve an amount of asset for transfer by a delegated third-party account.
   * 
   * Origin must be Signed.
   * 
   * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
   * for the purpose of holding the approval. If some non-zero amount of assets is already
   * approved from signing account to `delegate`, then it is topped up or unreserved to
   * meet the right value.
   * 
   * NOTE: The signing account does not need to own `amount` of assets at the point of
   * making this call.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account to delegate permission to transfer asset.
   * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
   * already an approval in place, then this acts additively.
   * 
   * Emits `ApprovedTransfer` on success.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.approve_transfer') === 'cd1332fd5d322aa53ad58f96ca5dd705919edd52a5a930580fb8de3fa3cd13b2'
  }

  /**
   * Approve an amount of asset for transfer by a delegated third-party account.
   * 
   * Origin must be Signed.
   * 
   * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
   * for the purpose of holding the approval. If some non-zero amount of assets is already
   * approved from signing account to `delegate`, then it is topped up or unreserved to
   * meet the right value.
   * 
   * NOTE: The signing account does not need to own `amount` of assets at the point of
   * making this call.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account to delegate permission to transfer asset.
   * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
   * already an approval in place, then this acts additively.
   * 
   * Emits `ApprovedTransfer` on success.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, delegate: v15.MultiAddress, amount: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsBurnCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.burn')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
   * 
   * Origin must be Signed and the sender should be the Manager of the asset `id`.
   * 
   * Bails with `NoAccount` if the `who` is already dead.
   * 
   * - `id`: The identifier of the asset to have some amount burned.
   * - `who`: The account to be debited from.
   * - `amount`: The maximum amount by which `who`'s balance should be reduced.
   * 
   * Emits `Burned` with the actual amount burned. If this takes the balance to below the
   * minimum for the asset, then the amount burned is increased to take it to zero.
   * 
   * Weight: `O(1)`
   * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.burn') === '63e61a3a10a697ab25286cfc93d9d1f906d72fc1b8398260a78d527980753607'
  }

  /**
   * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
   * 
   * Origin must be Signed and the sender should be the Manager of the asset `id`.
   * 
   * Bails with `NoAccount` if the `who` is already dead.
   * 
   * - `id`: The identifier of the asset to have some amount burned.
   * - `who`: The account to be debited from.
   * - `amount`: The maximum amount by which `who`'s balance should be reduced.
   * 
   * Emits `Burned` with the actual amount burned. If this takes the balance to below the
   * minimum for the asset, then the amount burned is increased to take it to zero.
   * 
   * Weight: `O(1)`
   * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
   */
  get asV15(): {id: bigint, who: v15.MultiAddress, amount: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsCancelApprovalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.cancel_approval')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be Signed and there must be an approval in place between signer and
   * `delegate`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.cancel_approval') === '8eb2efcdbea2abea04d5ba437f461543e93dc858446b70c484ec174c5bf1fe83'
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be Signed and there must be an approval in place between signer and
   * `delegate`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, delegate: v15.MultiAddress} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsClearMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.clear_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Any deposit is freed for the asset owner.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.clear_metadata') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Any deposit is freed for the asset owner.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.create')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue a new class of fungible assets from a public origin.
   * 
   * This new asset class has no assets initially and its owner is the origin.
   * 
   * The origin must be Signed and the sender must have sufficient funds free.
   * 
   * Funds of sender are reserved by `AssetDeposit`.
   * 
   * Parameters:
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `admin`: The admin of this class of assets. The admin is the initial address of each
   * member of the asset class's admin team.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `Created` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.create') === 'fd3d7d7bc6ca159558d8a0216565f73258b3beebc8e4533a1e2ee733d7dabdb4'
  }

  /**
   * Issue a new class of fungible assets from a public origin.
   * 
   * This new asset class has no assets initially and its owner is the origin.
   * 
   * The origin must be Signed and the sender must have sufficient funds free.
   * 
   * Funds of sender are reserved by `AssetDeposit`.
   * 
   * Parameters:
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `admin`: The admin of this class of assets. The admin is the initial address of each
   * member of the asset class's admin team.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `Created` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, admin: v15.MultiAddress, minBalance: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsDestroyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.destroy')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Destroy a class of fungible assets.
   * 
   * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
   * owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be destroyed. This must identify an existing
   * asset.
   * 
   * Emits `Destroyed` event when successful.
   * 
   * NOTE: It can be helpful to first freeze an asset before destroying it so that you
   * can provide accurate witness information and prevent users from manipulating state
   * in a way that can make it harder to destroy.
   * 
   * Weight: `O(c + p + a)` where:
   * - `c = (witness.accounts - witness.sufficients)`
   * - `s = witness.sufficients`
   * - `a = witness.approvals`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.destroy') === '9a8a5a90459d4fa03bad7d8dc11eed0c6acdd779939cd82a16cebc1973a19f8c'
  }

  /**
   * Destroy a class of fungible assets.
   * 
   * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
   * owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be destroyed. This must identify an existing
   * asset.
   * 
   * Emits `Destroyed` event when successful.
   * 
   * NOTE: It can be helpful to first freeze an asset before destroying it so that you
   * can provide accurate witness information and prevent users from manipulating state
   * in a way that can make it harder to destroy.
   * 
   * Weight: `O(c + p + a)` where:
   * - `c = (witness.accounts - witness.sufficients)`
   * - `s = witness.sufficients`
   * - `a = witness.approvals`
   */
  get asV15(): {id: bigint, witness: v15.DestroyWitness} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceAssetStatusCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_asset_status')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Alter the attributes of a given asset.
   * 
   * Origin must be `ForceOrigin`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
   * value to account for the state bloat associated with its balance storage. If set to
   * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
   * an ED in the Balances pallet or whatever else is used to control user-account state
   * growth).
   * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
   * instructions.
   * 
   * Emits `AssetStatusChanged` with the identity of the asset.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.force_asset_status') === '90a620e3ec2a293a5cd5d7f38de8b0619225567afddbd5beb0cd348a7cb02677'
  }

  /**
   * Alter the attributes of a given asset.
   * 
   * Origin must be `ForceOrigin`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
   * value to account for the state bloat associated with its balance storage. If set to
   * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
   * an ED in the Balances pallet or whatever else is used to control user-account state
   * growth).
   * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
   * instructions.
   * 
   * Emits `AssetStatusChanged` with the identity of the asset.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, owner: v15.MultiAddress, issuer: v15.MultiAddress, admin: v15.MultiAddress, freezer: v15.MultiAddress, minBalance: bigint, isSufficient: boolean, isFrozen: boolean} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceCancelApprovalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_cancel_approval')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
   * account of the asset `id`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.force_cancel_approval') === '1992cc09c994fe3122c964d5a5de53d79ddda838c125c948d96eee4bdd4b1123'
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
   * account of the asset `id`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, owner: v15.MultiAddress, delegate: v15.MultiAddress} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceClearMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_clear_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is returned.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.force_clear_metadata') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is returned.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_create')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue a new class of fungible assets from a privileged origin.
   * 
   * This new asset class has no assets initially.
   * 
   * The origin must conform to `ForceOrigin`.
   * 
   * Unlike `create`, no funds are reserved.
   * 
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `owner`: The owner of this class of assets. The owner has full superuser permissions
   * over this asset, but may later change and configure the permissions using
   * `transfer_ownership` and `set_team`.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `ForceCreated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.force_create') === 'bb56dd1346b44d085570fada86d0c64c13eb48c829162f340c3f483d80f68bc6'
  }

  /**
   * Issue a new class of fungible assets from a privileged origin.
   * 
   * This new asset class has no assets initially.
   * 
   * The origin must conform to `ForceOrigin`.
   * 
   * Unlike `create`, no funds are reserved.
   * 
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `owner`: The owner of this class of assets. The owner has full superuser permissions
   * over this asset, but may later change and configure the permissions using
   * `transfer_ownership` and `set_team`.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `ForceCreated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, owner: v15.MultiAddress, isSufficient: boolean, minBalance: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceSetMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_set_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Force the metadata for an asset to some value.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is left alone.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.force_set_metadata') === '5197c4dc1b19808caa5eb6363c6d281dc29fc658a2124f3030ba4e8886e36135'
  }

  /**
   * Force the metadata for an asset to some value.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is left alone.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
   */
  get asV15(): {id: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Move some assets from one account to another.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `source`: The account to be debited.
   * - `dest`: The account to be credited.
   * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
   * `dest`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the `source` balance above zero but
   * below the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
   * `dest`.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.force_transfer') === 'cc18377e00594b5c7f60c687bc3a7c5c9cffb3bbf3680370b405ee53323763cf'
  }

  /**
   * Move some assets from one account to another.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `source`: The account to be debited.
   * - `dest`: The account to be credited.
   * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
   * `dest`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the `source` balance above zero but
   * below the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
   * `dest`.
   */
  get asV15(): {id: bigint, source: v15.MultiAddress, dest: v15.MultiAddress, amount: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsFreezeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.freeze')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Disallow further unprivileged transfers from an account.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.freeze') === 'eaa070e127bbfeb999f9c6ca9bb7235f5cde45898eca8f758cb357c045995814'
  }

  /**
   * Disallow further unprivileged transfers from an account.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, who: v15.MultiAddress} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsFreezeAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.freeze_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Disallow further unprivileged transfers for the asset class.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.freeze_asset') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Disallow further unprivileged transfers for the asset class.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsMintCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.mint')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Mint assets of a particular class.
   * 
   * The origin must be Signed and the sender must be the Issuer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount minted.
   * - `beneficiary`: The account to be credited with the minted assets.
   * - `amount`: The amount of the asset to be minted.
   * 
   * Emits `Issued` event when successful.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.mint') === 'dcf7b66cecdcf054714bda4963a040d209690ed2329b1dbd649de576809f43b4'
  }

  /**
   * Mint assets of a particular class.
   * 
   * The origin must be Signed and the sender must be the Issuer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount minted.
   * - `beneficiary`: The account to be credited with the minted assets.
   * - `amount`: The amount of the asset to be minted.
   * 
   * Emits `Issued` event when successful.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
   */
  get asV15(): {id: bigint, beneficiary: v15.MultiAddress, amount: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsRefundCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.refund')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Return the deposit (if any) of an asset account.
   * 
   * The origin must be Signed.
   * 
   * - `id`: The identifier of the asset for the account to be created.
   * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
   * 
   * Emits `Refunded` event when successful.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.refund') === 'cfce64e36c421100db147253f1087292a9478daf8e8c9b54faadb27f9f81fe3d'
  }

  /**
   * Return the deposit (if any) of an asset account.
   * 
   * The origin must be Signed.
   * 
   * - `id`: The identifier of the asset for the account to be created.
   * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
   * 
   * Emits `Refunded` event when successful.
   */
  get asV15(): {id: bigint, allowBurn: boolean} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsSetMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.set_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Funds of sender are reserved according to the formula:
   * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
   * account any already reserved funds.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.set_metadata') === 'b142260ca2687dcfda31b9abcd465d84b02d11acdebd9fefa543ea7ca86ac3ec'
  }

  /**
   * Set the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Funds of sender are reserved according to the formula:
   * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
   * account any already reserved funds.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsSetTeamCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.set_team')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the Issuer, Admin and Freezer of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * 
   * Emits `TeamChanged`.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.set_team') === '535ec7d17ca9cce7d8c9f63cf0afd6878faa48589b8359118e8a5fca3d3100e7'
  }

  /**
   * Change the Issuer, Admin and Freezer of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * 
   * Emits `TeamChanged`.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, issuer: v15.MultiAddress, admin: v15.MultiAddress, freezer: v15.MultiAddress} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsThawCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.thaw')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Allow unprivileged transfers from an account again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be unfrozen.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.thaw') === 'eaa070e127bbfeb999f9c6ca9bb7235f5cde45898eca8f758cb357c045995814'
  }

  /**
   * Allow unprivileged transfers from an account again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be unfrozen.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, who: v15.MultiAddress} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsThawAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.thaw_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Allow unprivileged transfers for the asset again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be thawed.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.thaw_asset') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Allow unprivileged transfers for the asset again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be thawed.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsTouchCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.touch')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Create an asset account for non-provider assets.
   * 
   * A deposit will be taken from the signer account.
   * 
   * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
   *   to be taken.
   * - `id`: The identifier of the asset for the account to be created.
   * 
   * Emits `Touched` event when successful.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.touch') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Create an asset account for non-provider assets.
   * 
   * A deposit will be taken from the signer account.
   * 
   * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
   *   to be taken.
   * - `id`: The identifier of the asset for the account to be created.
   * 
   * Emits `Touched` event when successful.
   */
  get asV15(): {id: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Move some assets from the sender account to another.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.transfer') === '15d3ff016b8caf2dc391ea7f21e333708b7a2493c1e08905f1592e84c0abd6fd'
  }

  /**
   * Move some assets from the sender account to another.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get asV15(): {id: bigint, target: v15.MultiAddress, amount: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsTransferApprovedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.transfer_approved')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some asset balance from a previously delegated account to some third-party
   * account.
   * 
   * Origin must be Signed and there must be an approval in place by the `owner` to the
   * signer.
   * 
   * If the entire amount approved for transfer is transferred, then any deposit previously
   * reserved by `approve_transfer` is unreserved.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The account which previously approved for a transfer of at least `amount` and
   * from which the asset balance will be withdrawn.
   * - `destination`: The account to which the asset balance of `amount` will be transferred.
   * - `amount`: The amount of assets to transfer.
   * 
   * Emits `TransferredApproved` on success.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.transfer_approved') === '6be5bb605804720aad54c7e779258c9b2ff5a162980e3d5568d523cb8c068550'
  }

  /**
   * Transfer some asset balance from a previously delegated account to some third-party
   * account.
   * 
   * Origin must be Signed and there must be an approval in place by the `owner` to the
   * signer.
   * 
   * If the entire amount approved for transfer is transferred, then any deposit previously
   * reserved by `approve_transfer` is unreserved.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The account which previously approved for a transfer of at least `amount` and
   * from which the asset balance will be withdrawn.
   * - `destination`: The account to which the asset balance of `amount` will be transferred.
   * - `amount`: The amount of assets to transfer.
   * 
   * Emits `TransferredApproved` on success.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, owner: v15.MultiAddress, destination: v15.MultiAddress, amount: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsTransferKeepAliveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.transfer_keep_alive')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Move some assets from the sender account to another, keeping the sender account alive.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.transfer_keep_alive') === '15d3ff016b8caf2dc391ea7f21e333708b7a2493c1e08905f1592e84c0abd6fd'
  }

  /**
   * Move some assets from the sender account to another, keeping the sender account alive.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get asV15(): {id: bigint, target: v15.MultiAddress, amount: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsTransferOwnershipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.transfer_ownership')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the Owner of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * 
   * Emits `OwnerChanged`.
   * 
   * Weight: `O(1)`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Assets.transfer_ownership') === '5d594c1676c6bd42c154b97fe36f514cc6b4b0d2e5a55e1fee83974b645e8fb4'
  }

  /**
   * Change the Owner of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * 
   * Emits `OwnerChanged`.
   * 
   * Weight: `O(1)`
   */
  get asV15(): {id: bigint, owner: v15.MultiAddress} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorshipSetUnclesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Authorship.set_uncles')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Provide a set of uncles.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Authorship.set_uncles') === '491502deec691ea043fa56fc39b50b58deab8a6411c511016c06289ee5867611'
  }

  /**
   * Provide a set of uncles.
   */
  get asV1(): {newUncles: v1.Header[]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Provide a set of uncles.
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
  }

  /**
   * Provide a set of uncles.
   */
  get asV3(): {newUncles: v3.Header[]} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesForceTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.force_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get asV1(): {source: v1.MultiAddress, dest: v1.MultiAddress, value: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesForceUnreserveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.force_unreserve')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unreserve some balance from a user by force.
   * 
   * Can only be called by ROOT.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
  }

  /**
   * Unreserve some balance from a user by force.
   * 
   * Can only be called by ROOT.
   */
  get asV1(): {who: v1.MultiAddress, amount: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesSetBalanceCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.set_balance')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the balances of a given account.
   * 
   * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
   * also decrease the total issuance of the system (`TotalIssuance`).
   * If the new free or reserved balance is below the existential deposit,
   * it will reset the account nonce (`frame_system::AccountNonce`).
   * 
   * The dispatch origin for this call is `root`.
   * 
   * # <weight>
   * - Independent of the arguments.
   * - Contains a limited number of reads and writes.
   * ---------------------
   * - Base Weight:
   *     - Creating: 27.56 µs
   *     - Killing: 35.11 µs
   * - DB Weight: 1 Read, 1 Write to `who`
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.set_balance') === 'beb82909d38c015bc075ff8b107e47a02f8772bf5cf681d6cd84ef685e448a8f'
  }

  /**
   * Set the balances of a given account.
   * 
   * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
   * also decrease the total issuance of the system (`TotalIssuance`).
   * If the new free or reserved balance is below the existential deposit,
   * it will reset the account nonce (`frame_system::AccountNonce`).
   * 
   * The dispatch origin for this call is `root`.
   * 
   * # <weight>
   * - Independent of the arguments.
   * - Contains a limited number of reads and writes.
   * ---------------------
   * - Base Weight:
   *     - Creating: 27.56 µs
   *     - Killing: 35.11 µs
   * - DB Weight: 1 Read, 1 Write to `who`
   * # </weight>
   */
  get asV1(): {who: v1.MultiAddress, newFree: bigint, newReserved: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * It will decrease the total issuance of the system by the `TransferFee`.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   * - DB Weight: 1 Read and 1 Write to destination account
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * It will decrease the total issuance of the system by the `TransferFee`.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   * - DB Weight: 1 Read and 1 Write to destination account
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get asV1(): {dest: v1.MultiAddress, value: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer_all')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer the entire transferable balance from the caller account.
   * 
   * NOTE: This function only attempts to transfer _transferable_ balances. This means that
   * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   * transferred by this function. To ensure that this function results in a killed account,
   * you might need to prepare the account by removing any reference counters, storage
   * deposits, etc...
   * 
   * The dispatch origin of this call must be Signed.
   * 
   * - `dest`: The recipient of the transfer.
   * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *   of the funds the account has, causing the sender account to be killed (false), or
   *   transfer everything except at least the existential deposit, which will guarantee to
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.transfer_all') === '9c94c2ca9979f6551af6e123fb6b6ba14d026f862f9a023706f8f88c556b355f'
  }

  /**
   * Transfer the entire transferable balance from the caller account.
   * 
   * NOTE: This function only attempts to transfer _transferable_ balances. This means that
   * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   * transferred by this function. To ensure that this function results in a killed account,
   * you might need to prepare the account by removing any reference counters, storage
   * deposits, etc...
   * 
   * The dispatch origin of this call must be Signed.
   * 
   * - `dest`: The recipient of the transfer.
   * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *   of the funds the account has, causing the sender account to be killed (false), or
   *   transfer everything except at least the existential deposit, which will guarantee to
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get asV1(): {dest: v1.MultiAddress, keepAlive: boolean} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferKeepAliveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer_keep_alive')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   * # <weight>
   * - Cheaper than transfer because account cannot be killed.
   * - Base Weight: 51.4 µs
   * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   * #</weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   * # <weight>
   * - Cheaper than transfer because account cannot be killed.
   * - Base Weight: 51.4 µs
   * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   * #</weight>
   */
  get asV1(): {dest: v1.MultiAddress, value: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class BaseFeeSetBaseFeePerGasCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'BaseFee.set_base_fee_per_gas')
    this._chain = ctx._chain
    this.call = call
  }

  get isV9(): boolean {
    return this._chain.getCallHash('BaseFee.set_base_fee_per_gas') === '5bd81ad9acbdd818e9f9ac3692f947f6eb9f8929f0bd910ab889b377d83d3841'
  }

  get asV9(): {fee: bigint[]} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }
}

export class BaseFeeSetElasticityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'BaseFee.set_elasticity')
    this._chain = ctx._chain
    this.call = call
  }

  get isV9(): boolean {
    return this._chain.getCallHash('BaseFee.set_elasticity') === 'efcd4cd6d4fde4342db62d270df85a88b1c153af50159f9bc1ba1ce1133f2524'
  }

  get asV9(): {elasticity: number} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }
}

export class BaseFeeSetIsActiveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'BaseFee.set_is_active')
    this._chain = ctx._chain
    this.call = call
  }

  get isV9(): boolean {
    return this._chain.getCallHash('BaseFee.set_is_active') === '3add098d9e97883d6727546805c06a15ec2e3d4dd29382f81a6061d644cf503d'
  }

  get asV9(): {isActive: boolean} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }
}

export class BlockRewardSetConfigurationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'BlockReward.set_configuration')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Sets the reward distribution configuration parameters which will be used from next block reward distribution.
   * 
   * It is mandatory that all components of configuration sum up to one whole (**100%**),
   * otherwise an error `InvalidDistributionConfiguration` will be raised.
   * 
   * - `reward_distro_params` - reward distribution params
   * 
   * Emits `DistributionConfigurationChanged` with config embeded into event itself.
   * 
   */
  get isV12(): boolean {
    return this._chain.getCallHash('BlockReward.set_configuration') === '988a0fd0ca6a89664dfcc70f40883e80cf8f99f2c5e545cff46ec15e8a33da81'
  }

  /**
   * Sets the reward distribution configuration parameters which will be used from next block reward distribution.
   * 
   * It is mandatory that all components of configuration sum up to one whole (**100%**),
   * otherwise an error `InvalidDistributionConfiguration` will be raised.
   * 
   * - `reward_distro_params` - reward distribution params
   * 
   * Emits `DistributionConfigurationChanged` with config embeded into event itself.
   * 
   */
  get asV12(): {rewardDistroParams: v12.RewardDistributionConfig} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorSelectionLeaveIntentCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorSelection.leave_intent')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1(): boolean {
    return this._chain.getCallHash('CollatorSelection.leave_intent') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  get asV1(): null {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorSelectionRegisterAsCandidateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorSelection.register_as_candidate')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1(): boolean {
    return this._chain.getCallHash('CollatorSelection.register_as_candidate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  get asV1(): null {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorSelectionSetCandidacyBondCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorSelection.set_candidacy_bond')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1(): boolean {
    return this._chain.getCallHash('CollatorSelection.set_candidacy_bond') === 'a862ec70ffc8f3bd1c3d634825c052f8531eba68afa42769689fc18a6d718eda'
  }

  get asV1(): {bond: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorSelectionSetDesiredCandidatesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorSelection.set_desired_candidates')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1(): boolean {
    return this._chain.getCallHash('CollatorSelection.set_desired_candidates') === '405f1447d8db6ecc920213976cf7f98b6e74c5ceb4e2ecf66c742895e40e5d78'
  }

  get asV1(): {max: number} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorSelectionSetInvulnerablesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorSelection.set_invulnerables')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1(): boolean {
    return this._chain.getCallHash('CollatorSelection.set_invulnerables') === '4f4db85b7e763f702804fa793ac5cba68cfd546b497830a9c3c21dced2b91524'
  }

  get asV1(): {new: Uint8Array[]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingBondAndStakeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.bond_and_stake')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Lock up and stake balance of the origin account.
   * 
   * `value` must be more than the `minimum_balance` specified by `T::Currency`
   * unless account already has bonded value equal or more than 'minimum_balance'.
   * 
   * The dispatch origin for this call must be _Signed_ by the staker's account.
   * 
   * Effects of staking will be felt at the beginning of the next era.
   * 
   */
  get isV4(): boolean {
    return this._chain.getCallHash('DappsStaking.bond_and_stake') === '6672ecd9402312c35802b77f170edc72a7da0d94f1eba35efb11822174eb6435'
  }

  /**
   * Lock up and stake balance of the origin account.
   * 
   * `value` must be more than the `minimum_balance` specified by `T::Currency`
   * unless account already has bonded value equal or more than 'minimum_balance'.
   * 
   * The dispatch origin for this call must be _Signed_ by the staker's account.
   * 
   * Effects of staking will be felt at the beginning of the next era.
   * 
   */
  get asV4(): {contractId: v4.SmartContract, value: bigint} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingClaimCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.claim')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * claim the rewards earned by contract_id.
   * All stakers and developer for this contract will be paid out with single call.
   * claim is valid for all unclaimed eras but not longer than history_depth().
   * Any reward older than history_depth() will go to Treasury.
   * Any user can call this function.
   */
  get isV4(): boolean {
    return this._chain.getCallHash('DappsStaking.claim') === 'd2b3ddf13f5688c9b539b81bf731bd696bb7130e76dc3a14407857befc9661e6'
  }

  /**
   * claim the rewards earned by contract_id.
   * All stakers and developer for this contract will be paid out with single call.
   * claim is valid for all unclaimed eras but not longer than history_depth().
   * Any reward older than history_depth() will go to Treasury.
   * Any user can call this function.
   */
  get asV4(): {contractId: v4.SmartContract, era: number} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingClaimDappCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.claim_dapp')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Claim earned dapp rewards for the specified era.
   */
  get isV12(): boolean {
    return this._chain.getCallHash('DappsStaking.claim_dapp') === 'ffe77f2431724927402919078af56571e0848ccffe93717fbae6bf4953fdb5c3'
  }

  /**
   * Claim earned dapp rewards for the specified era.
   */
  get asV12(): {contractId: v12.SmartContract, era: number} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingClaimStakerCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.claim_staker')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Claim earned staker rewards for the oldest era.
   */
  get isV12(): boolean {
    return this._chain.getCallHash('DappsStaking.claim_staker') === '4abf305c22c30ab5f0f1789e1c17ec02338302344c27fd06733201cb3e4bea32'
  }

  /**
   * Claim earned staker rewards for the oldest era.
   */
  get asV12(): {contractId: v12.SmartContract} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingDeveloperPreApprovalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.developer_pre_approval')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * add contract address to the pre-approved list.
   * contract_id should be ink! or evm contract.
   * 
   * Sudo call is required
   */
  get isV4(): boolean {
    return this._chain.getCallHash('DappsStaking.developer_pre_approval') === '3a43abe7015f846aefc69f85bd63bfc1b2ec24576936a6e63ac06f406c1f0019'
  }

  /**
   * add contract address to the pre-approved list.
   * contract_id should be ink! or evm contract.
   * 
   * Sudo call is required
   */
  get asV4(): {developer: Uint8Array} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingDoUpgradeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.do_upgrade')
    this._chain = ctx._chain
    this.call = call
  }

  get isV12(): boolean {
    return this._chain.getCallHash('DappsStaking.do_upgrade') === '4d949e1693e4c69c05bdbabe5c24a295f1b6f510d7e5fa69f391662aaa663f95'
  }

  get asV12(): {weightLimit: (bigint | undefined)} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingEnableDeveloperPreApprovalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.enable_developer_pre_approval')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Enable or disable adding new contracts to the pre-approved list
   * 
   * Sudo call is required
   */
  get isV4(): boolean {
    return this._chain.getCallHash('DappsStaking.enable_developer_pre_approval') === '1a4f33b2dfaeb1147a73dad03c7960562e86062414cb8d5283edde6d1400631d'
  }

  /**
   * Enable or disable adding new contracts to the pre-approved list
   * 
   * Sudo call is required
   */
  get asV4(): {enabled: boolean} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingForceNewEraCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.force_new_era')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Force there to be a new era at the end of the next block. After this, it will be
   * reset to normal (non-forced) behaviour.
   * 
   * The dispatch origin must be Root.
   * 
   * 
   * # <weight>
   * - No arguments.
   * - Weight: O(1)
   * - Write ForceEra
   * # </weight>
   */
  get isV4(): boolean {
    return this._chain.getCallHash('DappsStaking.force_new_era') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Force there to be a new era at the end of the next block. After this, it will be
   * reset to normal (non-forced) behaviour.
   * 
   * The dispatch origin must be Root.
   * 
   * 
   * # <weight>
   * - No arguments.
   * - Weight: O(1)
   * - Write ForceEra
   * # </weight>
   */
  get asV4(): null {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingMaintenanceModeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.maintenance_mode')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * `true` will disable pallet, enabling maintenance mode. `false` will do the opposite.
   */
  get isV12(): boolean {
    return this._chain.getCallHash('DappsStaking.maintenance_mode') === '06e22e50961a88f026db10051ac75d9c97ac15a2b9abb2dd1225eb446b084816'
  }

  /**
   * `true` will disable pallet, enabling maintenance mode. `false` will do the opposite.
   */
  get asV12(): {enableMaintenance: boolean} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingNominationTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.nomination_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer nomination from one contract to another.
   * 
   * Same rules as for `bond_and_stake` and `unbond_and_unstake` apply.
   * Minor difference is that there is no unbonding period so this call won't
   * check whether max number of unbonding chunks is exceeded.
   * 
   */
  get isV17(): boolean {
    return this._chain.getCallHash('DappsStaking.nomination_transfer') === '12b9c1f358d0c0ed0dec0024cd1488c3d54ecedecc671af0bfe79b9ce4f5c0e8'
  }

  /**
   * Transfer nomination from one contract to another.
   * 
   * Same rules as for `bond_and_stake` and `unbond_and_unstake` apply.
   * Minor difference is that there is no unbonding period so this call won't
   * check whether max number of unbonding chunks is exceeded.
   * 
   */
  get asV17(): {originContractId: v17.SmartContract, value: bigint, targetContractId: v17.SmartContract} {
    assert(this.isV17)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingRegisterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.register')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * register contract into staking targets.
   * contract_id should be ink! or evm contract.
   * 
   * Any user can call this function.
   * However, caller have to have deposit amount.
   */
  get isV4(): boolean {
    return this._chain.getCallHash('DappsStaking.register') === '4abf305c22c30ab5f0f1789e1c17ec02338302344c27fd06733201cb3e4bea32'
  }

  /**
   * register contract into staking targets.
   * contract_id should be ink! or evm contract.
   * 
   * Any user can call this function.
   * However, caller have to have deposit amount.
   */
  get asV4(): {contractId: v4.SmartContract} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingSetContractStakeInfoCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.set_contract_stake_info')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Used to force set `ContractEraStake` storage values.
   * The purpose of this call is only for fixing one of the issues detected with dapps-staking.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('DappsStaking.set_contract_stake_info') === '80a16219b1fee309b77bed498fc9e20f524cb494cf5fb345a9ba3f7b5435bb8d'
  }

  /**
   * Used to force set `ContractEraStake` storage values.
   * The purpose of this call is only for fixing one of the issues detected with dapps-staking.
   */
  get asV16(): {contract: v16.SmartContract, era: number, contractStakeInfo: v16.ContractStakeInfo} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingSetRewardDestinationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.set_reward_destination')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Used to set reward destination for staker rewards
   */
  get isV16(): boolean {
    return this._chain.getCallHash('DappsStaking.set_reward_destination') === '6e7d19c80f571a303473c9594fead6a895a508211c77d56b6f504732d023ab3c'
  }

  /**
   * Used to set reward destination for staker rewards
   */
  get asV16(): {rewardDestination: v16.RewardDestination} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingUnbondAndUnstakeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.unbond_and_unstake')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Start unbonding process and unstake balance from the contract.
   * 
   * The unstaked amount will no longer be eligible for rewards but still won't be unlocked.
   * User needs to wait for the unbonding period to finish before being able to withdraw
   * the funds via `withdraw_unbonded` call.
   * 
   * In case remaining staked balance on contract is below minimum staking amount,
   * entire stake for that contract will be unstaked.
   * 
   */
  get isV12(): boolean {
    return this._chain.getCallHash('DappsStaking.unbond_and_unstake') === '6672ecd9402312c35802b77f170edc72a7da0d94f1eba35efb11822174eb6435'
  }

  /**
   * Start unbonding process and unstake balance from the contract.
   * 
   * The unstaked amount will no longer be eligible for rewards but still won't be unlocked.
   * User needs to wait for the unbonding period to finish before being able to withdraw
   * the funds via `withdraw_unbonded` call.
   * 
   * In case remaining staked balance on contract is below minimum staking amount,
   * entire stake for that contract will be unstaked.
   * 
   */
  get asV12(): {contractId: v12.SmartContract, value: bigint} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingUnbondUnstakeAndWithdrawCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.unbond_unstake_and_withdraw')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unbond, unstake and withdraw balance from the contract.
   * 
   * Value will be unlocked for the user.
   * 
   * In case remaining staked balance on contract is below minimum staking amount,
   * entire stake for that contract will be unstaked.
   * 
   */
  get isV4(): boolean {
    return this._chain.getCallHash('DappsStaking.unbond_unstake_and_withdraw') === '6672ecd9402312c35802b77f170edc72a7da0d94f1eba35efb11822174eb6435'
  }

  /**
   * Unbond, unstake and withdraw balance from the contract.
   * 
   * Value will be unlocked for the user.
   * 
   * In case remaining staked balance on contract is below minimum staking amount,
   * entire stake for that contract will be unstaked.
   * 
   */
  get asV4(): {contractId: v4.SmartContract, value: bigint} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingUnregisterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.unregister')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unregister existing contract from dapps staking
   * 
   * This must be called by the developer who registered the contract.
   * 
   * Warning: After this action contract can not be assigned again.
   */
  get isV4(): boolean {
    return this._chain.getCallHash('DappsStaking.unregister') === '4abf305c22c30ab5f0f1789e1c17ec02338302344c27fd06733201cb3e4bea32'
  }

  /**
   * Unregister existing contract from dapps staking
   * 
   * This must be called by the developer who registered the contract.
   * 
   * Warning: After this action contract can not be assigned again.
   */
  get asV4(): {contractId: v4.SmartContract} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingWithdrawFromUnregisteredCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.withdraw_from_unregistered')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Withdraw locked funds from a contract that was unregistered.
   * Funds don't need to undergo the unbonding period - they are returned immediately.
   */
  get isV12(): boolean {
    return this._chain.getCallHash('DappsStaking.withdraw_from_unregistered') === '4abf305c22c30ab5f0f1789e1c17ec02338302344c27fd06733201cb3e4bea32'
  }

  /**
   * Withdraw locked funds from a contract that was unregistered.
   * Funds don't need to undergo the unbonding period - they are returned immediately.
   */
  get asV12(): {contractId: v12.SmartContract} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }
}

export class DappsStakingWithdrawUnbondedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DappsStaking.withdraw_unbonded')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Withdraw all funds that have completed the unbonding process.
   * 
   * If there are unbonding chunks which will be fully unbonded in future eras,
   * they will remain and can be withdrawn later.
   * 
   */
  get isV12(): boolean {
    return this._chain.getCallHash('DappsStaking.withdraw_unbonded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Withdraw all funds that have completed the unbonding process.
   * 
   * If there are unbonding chunks which will be fully unbonded in future eras,
   * they will remain and can be withdrawn later.
   * 
   */
  get asV12(): null {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }
}

export class DmpQueueServiceOverweightCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DmpQueue.service_overweight')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Service a single overweight message.
   * 
   * - `origin`: Must pass `ExecuteOverweightOrigin`.
   * - `index`: The index of the overweight message to service.
   * - `weight_limit`: The amount of weight that message execution may take.
   * 
   * Errors:
   * - `Unknown`: Message of `index` is unknown.
   * - `OverLimit`: Message execution may use greater than `weight_limit`.
   * 
   * Events:
   * - `OverweightServiced`: On success.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('DmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
  }

  /**
   * Service a single overweight message.
   * 
   * - `origin`: Must pass `ExecuteOverweightOrigin`.
   * - `index`: The index of the overweight message to service.
   * - `weight_limit`: The amount of weight that message execution may take.
   * 
   * Errors:
   * - `Unknown`: Message of `index` is unknown.
   * - `OverLimit`: Message execution may use greater than `weight_limit`.
   * 
   * Events:
   * - `OverweightServiced`: On success.
   */
  get asV15(): {index: bigint, weightLimit: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class EvmCallCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EVM.call')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('EVM.call') === 'be311e9b1941397ec5420541a4d014dc6d77d9bcf1314ce021248aeb33a2db1b'
  }

  /**
   * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
   */
  get asV1(): {source: Uint8Array, target: Uint8Array, input: Uint8Array, value: bigint[], gasLimit: bigint, gasPrice: bigint[], nonce: (bigint[] | undefined)} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
   */
  get isV9(): boolean {
    return this._chain.getCallHash('EVM.call') === 'fea29ab5ffa1693ee44fbbd392a433a4a457b2635f51d9dd553c1fa21060fce1'
  }

  /**
   * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
   */
  get asV9(): {source: Uint8Array, target: Uint8Array, input: Uint8Array, value: bigint[], gasLimit: bigint, maxFeePerGas: bigint[], maxPriorityFeePerGas: (bigint[] | undefined), nonce: (bigint[] | undefined), accessList: [Uint8Array, Uint8Array[]][]} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }
}

export class EvmCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EVM.create')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue an EVM create operation. This is similar to a contract creation transaction in
   * Ethereum.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('EVM.create') === 'bd16b46d2686c17b74fb02b78c644a992fce6700740e263605f293f357fe76e0'
  }

  /**
   * Issue an EVM create operation. This is similar to a contract creation transaction in
   * Ethereum.
   */
  get asV1(): {source: Uint8Array, init: Uint8Array, value: bigint[], gasLimit: bigint, gasPrice: bigint[], nonce: (bigint[] | undefined)} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Issue an EVM create operation. This is similar to a contract creation transaction in
   * Ethereum.
   */
  get isV9(): boolean {
    return this._chain.getCallHash('EVM.create') === 'd122692f87e80357e86c0556158bc9fa231e58342b38470384eed7023a81eee0'
  }

  /**
   * Issue an EVM create operation. This is similar to a contract creation transaction in
   * Ethereum.
   */
  get asV9(): {source: Uint8Array, init: Uint8Array, value: bigint[], gasLimit: bigint, maxFeePerGas: bigint[], maxPriorityFeePerGas: (bigint[] | undefined), nonce: (bigint[] | undefined), accessList: [Uint8Array, Uint8Array[]][]} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }
}

export class EvmCreate2Call {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EVM.create2')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue an EVM create2 operation.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('EVM.create2') === 'fb50bbcffc045eb16c17783925df9b3e1936c765f5dd69c88a438ddf8fc7707c'
  }

  /**
   * Issue an EVM create2 operation.
   */
  get asV1(): {source: Uint8Array, init: Uint8Array, salt: Uint8Array, value: bigint[], gasLimit: bigint, gasPrice: bigint[], nonce: (bigint[] | undefined)} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Issue an EVM create2 operation.
   */
  get isV9(): boolean {
    return this._chain.getCallHash('EVM.create2') === '321816f7d3da365d11a9a8e1f13766967072f27fb142d2024371d3a9dd053be8'
  }

  /**
   * Issue an EVM create2 operation.
   */
  get asV9(): {source: Uint8Array, init: Uint8Array, salt: Uint8Array, value: bigint[], gasLimit: bigint, maxFeePerGas: bigint[], maxPriorityFeePerGas: (bigint[] | undefined), nonce: (bigint[] | undefined), accessList: [Uint8Array, Uint8Array[]][]} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }
}

export class EvmHotfixIncAccountSufficientsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EVM.hotfix_inc_account_sufficients')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Increment `sufficients` for existing accounts having a nonzero `nonce` but zero `sufficients` value.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('EVM.hotfix_inc_account_sufficients') === 'e368b92ea67bc2b182782fa8f2aee8e839404c3635495666aa053956718d32c8'
  }

  /**
   * Increment `sufficients` for existing accounts having a nonzero `nonce` but zero `sufficients` value.
   */
  get asV15(): {addresses: Uint8Array[]} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class EvmWithdrawCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EVM.withdraw')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Withdraw balance from EVM into currency/balances pallet.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('EVM.withdraw') === '6213607a84a4a3aa47d755efc366f94b81dbbfa3fe175ebac796707949240fdb'
  }

  /**
   * Withdraw balance from EVM into currency/balances pallet.
   */
  get asV1(): {address: Uint8Array, value: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class EthCallCallCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EthCall.call')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('EthCall.call') === '578dc4be85feb37b2acc41a9f116088348e8d4214b0e1686ee69dc97d40c2d73'
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV1(): {call: v1.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('EthCall.call') === '7e00fecdec146b573c3be2a081d04130d18f356ea48e348ed0ca211e65e6f637'
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV3(): {call: v3.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV4(): boolean {
    return this._chain.getCallHash('EthCall.call') === 'c9e85d1f1f32c30d830dc4a49f640a049905a5e6f1520473bddd053b8db69677'
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV4(): {call: v4.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV9(): boolean {
    return this._chain.getCallHash('EthCall.call') === '5f86ec07d0278f09b8dd8344a0e0591c8ab65bb55c2780d96a29cc340db410bb'
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV9(): {call: v9.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV12(): boolean {
    return this._chain.getCallHash('EthCall.call') === 'f4c0b1ebe85162fdd047f1d00159d2438c2f3ff2877c16e77dbd3415329d0d92'
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV12(): {call: v12.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV13(): boolean {
    return this._chain.getCallHash('EthCall.call') === '990267f929924d68eee919fc421518fd41b97b8cfd9447b4377c274bdbf98855'
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV13(): {call: v13.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
    assert(this.isV13)
    return this._chain.decodeCall(this.call)
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV15(): boolean {
    return this._chain.getCallHash('EthCall.call') === '0a22bdb92e7c24189b29751b952af0c8b37ff8f4623d7f3091fdac076e9bb88f'
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV15(): {call: v15.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('EthCall.call') === '97aec17c9c2c05e3431ea3ff1e6019c323d9d68c95ff80fd83e11ffa2957a4a4'
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV16(): {call: v16.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV17(): boolean {
    return this._chain.getCallHash('EthCall.call') === 'fdd1f8b240882af57001c793513090d4b60ebef559873d3397379568a61b39ed'
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV17(): {call: v17.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
    assert(this.isV17)
    return this._chain.decodeCall(this.call)
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV23(): boolean {
    return this._chain.getCallHash('EthCall.call') === 'f70e35e0d61d5ca14aa910ce8ba3df74a343d4dbfaf1894c37ed5bd8f5184bc6'
  }

  /**
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV23(): {call: v23.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class EthereumTransactCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Ethereum.transact')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transact an Ethereum transaction.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Ethereum.transact') === '27ed559a6856e5085900eccf20290c958992ff554f041fdc4516e405fc8ddb97'
  }

  /**
   * Transact an Ethereum transaction.
   */
  get asV1(): {transaction: v1.LegacyTransaction} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Transact an Ethereum transaction.
   */
  get isV9(): boolean {
    return this._chain.getCallHash('Ethereum.transact') === '141b9fbf21429ca5123d8cd59859311499b6d8eb06fdd0a71b9b4b097e14a234'
  }

  /**
   * Transact an Ethereum transaction.
   */
  get asV9(): {transaction: v9.TransactionV2} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityAddRegistrarCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.add_registrar')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add a registrar to the system.
   * 
   * The dispatch origin for this call must be `T::RegistrarOrigin`.
   * 
   * - `account`: the account of the registrar.
   * 
   * Emits `RegistrarAdded` if successful.
   * 
   * # <weight>
   * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
   * - One storage mutation (codec `O(R)`).
   * - One event.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.add_registrar') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * Add a registrar to the system.
   * 
   * The dispatch origin for this call must be `T::RegistrarOrigin`.
   * 
   * - `account`: the account of the registrar.
   * 
   * Emits `RegistrarAdded` if successful.
   * 
   * # <weight>
   * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
   * - One storage mutation (codec `O(R)`).
   * - One event.
   * # </weight>
   */
  get asV1(): {account: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityAddSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.add_sub')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add the given account to the sender's subs.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.add_sub') === 'b7d02496580d984a1a588630bfbf580f423f08a761006f8706b057ac73069a38'
  }

  /**
   * Add the given account to the sender's subs.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get asV1(): {sub: v1.MultiAddress, data: v1.Data} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityCancelRequestCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.cancel_request')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel a previous request.
   * 
   * Payment: A previously reserved deposit is returned on success.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a
   * registered identity.
   * 
   * - `reg_index`: The index of the registrar whose judgement is no longer requested.
   * 
   * Emits `JudgementUnrequested` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-reserve operation.
   * - One storage mutation `O(R + X)`.
   * - One event
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.cancel_request') === '89d659d6a17ba36d0dfc7c90a7f043581d7fe980043895169d7dda1416ff7e5b'
  }

  /**
   * Cancel a previous request.
   * 
   * Payment: A previously reserved deposit is returned on success.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a
   * registered identity.
   * 
   * - `reg_index`: The index of the registrar whose judgement is no longer requested.
   * 
   * Emits `JudgementUnrequested` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-reserve operation.
   * - One storage mutation `O(R + X)`.
   * - One event
   * # </weight>
   */
  get asV1(): {regIndex: number} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityClearIdentityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.clear_identity')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear an account's identity info and all sub-accounts and return all deposits.
   * 
   * Payment: All reserved balances on the account are returned.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * identity.
   * 
   * Emits `IdentityCleared` if successful.
   * 
   * # <weight>
   * - `O(R + S + X)`
   *   - where `R` registrar-count (governance-bounded).
   *   - where `S` subs-count (hard- and deposit-bounded).
   *   - where `X` additional-field-count (deposit-bounded and code-bounded).
   * - One balance-unreserve operation.
   * - `2` storage reads and `S + 2` storage deletions.
   * - One event.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Clear an account's identity info and all sub-accounts and return all deposits.
   * 
   * Payment: All reserved balances on the account are returned.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * identity.
   * 
   * Emits `IdentityCleared` if successful.
   * 
   * # <weight>
   * - `O(R + S + X)`
   *   - where `R` registrar-count (governance-bounded).
   *   - where `S` subs-count (hard- and deposit-bounded).
   *   - where `X` additional-field-count (deposit-bounded and code-bounded).
   * - One balance-unreserve operation.
   * - `2` storage reads and `S + 2` storage deletions.
   * - One event.
   * # </weight>
   */
  get asV1(): null {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityKillIdentityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.kill_identity')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove an account's identity and sub-account information and slash the deposits.
   * 
   * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
   * `Slash`. Verification request deposits are not returned; they should be cancelled
   * manually using `cancel_request`.
   * 
   * The dispatch origin for this call must match `T::ForceOrigin`.
   * 
   * - `target`: the account whose identity the judgement is upon. This must be an account
   *   with a registered identity.
   * 
   * Emits `IdentityKilled` if successful.
   * 
   * # <weight>
   * - `O(R + S + X)`.
   * - One balance-reserve operation.
   * - `S + 2` storage mutations.
   * - One event.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.kill_identity') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
  }

  /**
   * Remove an account's identity and sub-account information and slash the deposits.
   * 
   * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
   * `Slash`. Verification request deposits are not returned; they should be cancelled
   * manually using `cancel_request`.
   * 
   * The dispatch origin for this call must match `T::ForceOrigin`.
   * 
   * - `target`: the account whose identity the judgement is upon. This must be an account
   *   with a registered identity.
   * 
   * Emits `IdentityKilled` if successful.
   * 
   * # <weight>
   * - `O(R + S + X)`.
   * - One balance-reserve operation.
   * - `S + 2` storage mutations.
   * - One event.
   * # </weight>
   */
  get asV1(): {target: v1.MultiAddress} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityProvideJudgementCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.provide_judgement')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Provide a judgement for an account's identity.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `reg_index`.
   * 
   * - `reg_index`: the index of the registrar whose judgement is being made.
   * - `target`: the account whose identity the judgement is upon. This must be an account
   *   with a registered identity.
   * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
   * 
   * Emits `JudgementGiven` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-transfer operation.
   * - Up to one account-lookup operation.
   * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
   * - One event.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.provide_judgement') === 'abe9fadae40ed65e9f7ddf86c0556a4a577958e2dc507fbb3f459268e87e7b6c'
  }

  /**
   * Provide a judgement for an account's identity.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `reg_index`.
   * 
   * - `reg_index`: the index of the registrar whose judgement is being made.
   * - `target`: the account whose identity the judgement is upon. This must be an account
   *   with a registered identity.
   * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
   * 
   * Emits `JudgementGiven` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-transfer operation.
   * - Up to one account-lookup operation.
   * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
   * - One event.
   * # </weight>
   */
  get asV1(): {regIndex: number, target: v1.MultiAddress, judgement: v1.Judgement} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityQuitSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.quit_sub')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove the sender as a sub-account.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender (*not* the original depositor).
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * super-identity.
   * 
   * NOTE: This should not normally be used, but is provided in the case that the non-
   * controller of an account is maliciously registered as a sub-account.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.quit_sub') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Remove the sender as a sub-account.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender (*not* the original depositor).
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * super-identity.
   * 
   * NOTE: This should not normally be used, but is provided in the case that the non-
   * controller of an account is maliciously registered as a sub-account.
   */
  get asV1(): null {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityRemoveSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.remove_sub')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove the given account from the sender's subs.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.remove_sub') === 'e2fd2e12228143db75d1c9482d7788894e6f224b6c362b650b73ac996f701805'
  }

  /**
   * Remove the given account from the sender's subs.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get asV1(): {sub: v1.MultiAddress} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityRenameSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.rename_sub')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Alter the associated name of the given sub-account.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.rename_sub') === 'b7d02496580d984a1a588630bfbf580f423f08a761006f8706b057ac73069a38'
  }

  /**
   * Alter the associated name of the given sub-account.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get asV1(): {sub: v1.MultiAddress, data: v1.Data} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityRequestJudgementCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.request_judgement')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request a judgement from a registrar.
   * 
   * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
   * given.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a
   * registered identity.
   * 
   * - `reg_index`: The index of the registrar whose judgement is requested.
   * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
   * 
   * ```nocompile
   * Self::registrars().get(reg_index).unwrap().fee
   * ```
   * 
   * Emits `JudgementRequested` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-reserve operation.
   * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
   * - One event.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.request_judgement') === 'c6336282cbe5b8ccf3769cc13c92f532be2499335e3d52ebf566a888e92b5b7c'
  }

  /**
   * Request a judgement from a registrar.
   * 
   * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
   * given.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a
   * registered identity.
   * 
   * - `reg_index`: The index of the registrar whose judgement is requested.
   * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
   * 
   * ```nocompile
   * Self::registrars().get(reg_index).unwrap().fee
   * ```
   * 
   * Emits `JudgementRequested` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-reserve operation.
   * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
   * - One event.
   * # </weight>
   */
  get asV1(): {regIndex: number, maxFee: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetAccountIdCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_account_id')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the account associated with a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `new`: the new account ID.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.set_account_id') === 'a333bb3ce3e314d48fcf93f14155097760db6249022181f1eb923c1343af6813'
  }

  /**
   * Change the account associated with a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `new`: the new account ID.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
   * # </weight>
   */
  get asV1(): {index: number, new: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetFeeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_fee')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the fee required for a judgement to be requested from a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `fee`: the new fee.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.set_fee') === '6418458414c3cef3d5c80c88232d781e76733c675303b2937b9cd30ae58d0fe4'
  }

  /**
   * Set the fee required for a judgement to be requested from a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `fee`: the new fee.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
   * # </weight>
   */
  get asV1(): {index: number, fee: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetFieldsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_fields')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the field information for a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `fields`: the fields that the registrar concerns themselves with.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.set_fields') === 'b2c8998acd304e28e4f4a78e6a07f5bf7caf587532734dbd94b85c01a31c3e13'
  }

  /**
   * Set the field information for a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `fields`: the fields that the registrar concerns themselves with.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
   * # </weight>
   */
  get asV1(): {index: number, fields: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetIdentityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_identity')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set an account's identity information and reserve the appropriate deposit.
   * 
   * If the account already has identity information, the deposit is taken as part payment
   * for the new deposit.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `info`: The identity information.
   * 
   * Emits `IdentitySet` if successful.
   * 
   * # <weight>
   * - `O(X + X' + R)`
   *   - where `X` additional-field-count (deposit-bounded and code-bounded)
   *   - where `R` judgements-count (registrar-count-bounded)
   * - One balance reserve operation.
   * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
   * - One event.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
  }

  /**
   * Set an account's identity information and reserve the appropriate deposit.
   * 
   * If the account already has identity information, the deposit is taken as part payment
   * for the new deposit.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `info`: The identity information.
   * 
   * Emits `IdentitySet` if successful.
   * 
   * # <weight>
   * - `O(X + X' + R)`
   *   - where `X` additional-field-count (deposit-bounded and code-bounded)
   *   - where `R` judgements-count (registrar-count-bounded)
   * - One balance reserve operation.
   * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
   * - One event.
   * # </weight>
   */
  get asV1(): {info: v1.IdentityInfo} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetSubsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_subs')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the sub-accounts of the sender.
   * 
   * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
   * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * identity.
   * 
   * - `subs`: The identity's (new) sub-accounts.
   * 
   * # <weight>
   * - `O(P + S)`
   *   - where `P` old-subs-count (hard- and deposit-bounded).
   *   - where `S` subs-count (hard- and deposit-bounded).
   * - At most one balance operations.
   * - DB:
   *   - `P + S` storage mutations (codec complexity `O(1)`)
   *   - One storage read (codec complexity `O(P)`).
   *   - One storage write (codec complexity `O(S)`).
   *   - One storage-exists (`IdentityOf::contains_key`).
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Identity.set_subs') === 'f156a100857e71b9e1eab839801795e8569b63b49f6c30333c5bf12811cbbe73'
  }

  /**
   * Set the sub-accounts of the sender.
   * 
   * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
   * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * identity.
   * 
   * - `subs`: The identity's (new) sub-accounts.
   * 
   * # <weight>
   * - `O(P + S)`
   *   - where `P` old-subs-count (hard- and deposit-bounded).
   *   - where `S` subs-count (hard- and deposit-bounded).
   * - At most one balance operations.
   * - DB:
   *   - `P + S` storage mutations (codec complexity `O(1)`)
   *   - One storage read (codec complexity `O(P)`).
   *   - One storage write (codec complexity `O(S)`).
   *   - One storage-exists (`IdentityOf::contains_key`).
   * # </weight>
   */
  get asV1(): {subs: [Uint8Array, v1.Data][]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultisigApproveAsMultiCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Multisig.approve_as_multi')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register approval for a dispatch to be made from a deterministic composite account if
   * approved by a total of `threshold - 1` of `other_signatories`.
   * 
   * Payment: `DepositBase` will be reserved if this is the first approval, plus
   * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
   * is cancelled.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `threshold`: The total number of approvals for this dispatch before it is executed.
   * - `other_signatories`: The accounts (other than the sender) who can approve this
   * dispatch. May not be empty.
   * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
   * not the first approval, then it must be `Some`, with the timepoint (block number and
   * transaction index) of the first approval transaction.
   * - `call_hash`: The hash of the call to be executed.
   * 
   * NOTE: If this is the final approval, you will want to use `as_multi` instead.
   * 
   * # <weight>
   * - `O(S)`.
   * - Up to one balance-reserve or unreserve operation.
   * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
   *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
   * - One encode & hash, both of complexity `O(S)`.
   * - Up to one binary search and insert (`O(logS + S)`).
   * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
   * - One event.
   * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
   *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
   * ----------------------------------
   * - DB Weight:
   *     - Read: Multisig Storage, [Caller Account]
   *     - Write: Multisig Storage, [Caller Account]
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Multisig.approve_as_multi') === '615a5baaaa889f9e30839c70485b8c752e5eb050a85a23102b2f9f4c301be63a'
  }

  /**
   * Register approval for a dispatch to be made from a deterministic composite account if
   * approved by a total of `threshold - 1` of `other_signatories`.
   * 
   * Payment: `DepositBase` will be reserved if this is the first approval, plus
   * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
   * is cancelled.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `threshold`: The total number of approvals for this dispatch before it is executed.
   * - `other_signatories`: The accounts (other than the sender) who can approve this
   * dispatch. May not be empty.
   * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
   * not the first approval, then it must be `Some`, with the timepoint (block number and
   * transaction index) of the first approval transaction.
   * - `call_hash`: The hash of the call to be executed.
   * 
   * NOTE: If this is the final approval, you will want to use `as_multi` instead.
   * 
   * # <weight>
   * - `O(S)`.
   * - Up to one balance-reserve or unreserve operation.
   * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
   *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
   * - One encode & hash, both of complexity `O(S)`.
   * - Up to one binary search and insert (`O(logS + S)`).
   * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
   * - One event.
   * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
   *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
   * ----------------------------------
   * - DB Weight:
   *     - Read: Multisig Storage, [Caller Account]
   *     - Write: Multisig Storage, [Caller Account]
   * # </weight>
   */
  get asV1(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v1.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultisigAsMultiCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Multisig.as_multi')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register approval for a dispatch to be made from a deterministic composite account if
   * approved by a total of `threshold - 1` of `other_signatories`.
   * 
   * If there are enough, then dispatch the call.
   * 
   * Payment: `DepositBase` will be reserved if this is the first approval, plus
   * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
   * is cancelled.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `threshold`: The total number of approvals for this dispatch before it is executed.
   * - `other_signatories`: The accounts (other than the sender) who can approve this
   * dispatch. May not be empty.
   * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
   * not the first approval, then it must be `Some`, with the timepoint (block number and
   * transaction index) of the first approval transaction.
   * - `call`: The call to be executed.
   * 
   * NOTE: Unless this is the final approval, you will generally want to use
   * `approve_as_multi` instead, since it only requires a hash of the call.
   * 
   * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
   * on success, result is `Ok` and the result from the interior call, if it was executed,
   * may be found in the deposited `MultisigExecuted` event.
   * 
   * # <weight>
   * - `O(S + Z + Call)`.
   * - Up to one balance-reserve or unreserve operation.
   * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
   *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
   * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
   * - One encode & hash, both of complexity `O(S)`.
   * - Up to one binary search and insert (`O(logS + S)`).
   * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
   * - One event.
   * - The weight of the `call`.
   * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
   *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
   * -------------------------------
   * - DB Weight:
   *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
   *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
   * - Plus Call Weight
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Multisig.as_multi') === '548dea53ff79fe99438cf591950a533c93f9772d03a3995ec72a80376fcae222'
  }

  /**
   * Register approval for a dispatch to be made from a deterministic composite account if
   * approved by a total of `threshold - 1` of `other_signatories`.
   * 
   * If there are enough, then dispatch the call.
   * 
   * Payment: `DepositBase` will be reserved if this is the first approval, plus
   * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
   * is cancelled.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `threshold`: The total number of approvals for this dispatch before it is executed.
   * - `other_signatories`: The accounts (other than the sender) who can approve this
   * dispatch. May not be empty.
   * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
   * not the first approval, then it must be `Some`, with the timepoint (block number and
   * transaction index) of the first approval transaction.
   * - `call`: The call to be executed.
   * 
   * NOTE: Unless this is the final approval, you will generally want to use
   * `approve_as_multi` instead, since it only requires a hash of the call.
   * 
   * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
   * on success, result is `Ok` and the result from the interior call, if it was executed,
   * may be found in the deposited `MultisigExecuted` event.
   * 
   * # <weight>
   * - `O(S + Z + Call)`.
   * - Up to one balance-reserve or unreserve operation.
   * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
   *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
   * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
   * - One encode & hash, both of complexity `O(S)`.
   * - Up to one binary search and insert (`O(logS + S)`).
   * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
   * - One event.
   * - The weight of the `call`.
   * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
   *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
   * -------------------------------
   * - DB Weight:
   *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
   *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
   * - Plus Call Weight
   * # </weight>
   */
  get asV1(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v1.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultisigAsMultiThreshold1Call {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Multisig.as_multi_threshold_1')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '846174b4ffb90c4da886e1aab704c826a158bf70905463a36aae1ac0dd41f9c6'
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get asV1(): {otherSignatories: Uint8Array[], call: v1.Call} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '230c42ecd50647dfd123a6f59a4506894502564adbcc300c66b7aed89f8f8ea4'
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get asV3(): {otherSignatories: Uint8Array[], call: v3.Call} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV4(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '69a8e70221624063be9936c4412e501b06b80481ada210442077f81ea0f5a225'
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get asV4(): {otherSignatories: Uint8Array[], call: v4.Call} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV9(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'edbfa4361b696c1d2ab0f48183e6e698088c063755d9849d153ade776495cfab'
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get asV9(): {otherSignatories: Uint8Array[], call: v9.Call} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV12(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'cc208094983a2726bd23e0a36cadd2b00efe0c895b20cfb84826e65d3e0a2670'
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get asV12(): {otherSignatories: Uint8Array[], call: v12.Call} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV13(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '6ce09727bc707d0fc176ef6a564f3aef42b33ba97f130ee555ed8a61147b29f2'
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get asV13(): {otherSignatories: Uint8Array[], call: v13.Call} {
    assert(this.isV13)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '70a83792d2b8a78c3a4b4869ff6a736e5b0efe640e74d463614567271964b1ac'
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get asV15(): {otherSignatories: Uint8Array[], call: v15.Call} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'fd4d5b4d7c27450d71611126dbfbe4e967463a432e15c6700342351b117a22b9'
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get asV16(): {otherSignatories: Uint8Array[], call: v16.Call} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV17(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '9079bf24f56109156f64910254200149e1fa08ec8c89a11c3997dbce83bf8f0c'
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get asV17(): {otherSignatories: Uint8Array[], call: v17.Call} {
    assert(this.isV17)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV23(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'b2eb4c4ff8ee768c10aaf7e0de359a0ee1b39c7bf7f7cd0ab02152623da6ecd8'
  }

  /**
   * Immediately dispatch a multi-signature call using a single approval from the caller.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `other_signatories`: The accounts (other than the sender) who are part of the
   * multi-signature, but do not participate in the approval process.
   * - `call`: The call to be executed.
   * 
   * Result is equivalent to the dispatched result.
   * 
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get asV23(): {otherSignatories: Uint8Array[], call: v23.Call} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class MultisigCancelAsMultiCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Multisig.cancel_as_multi')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
   * for this operation will be unreserved on success.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `threshold`: The total number of approvals for this dispatch before it is executed.
   * - `other_signatories`: The accounts (other than the sender) who can approve this
   * dispatch. May not be empty.
   * - `timepoint`: The timepoint (block number and transaction index) of the first approval
   * transaction for this dispatch.
   * - `call_hash`: The hash of the call to be executed.
   * 
   * # <weight>
   * - `O(S)`.
   * - Up to one balance-reserve or unreserve operation.
   * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
   *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
   * - One encode & hash, both of complexity `O(S)`.
   * - One event.
   * - I/O: 1 read `O(S)`, one remove.
   * - Storage: removes one item.
   * ----------------------------------
   * - DB Weight:
   *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
   *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Multisig.cancel_as_multi') === '4ccc75a4f739c659f177e3df98fba2ea59ddade74c4ebccd51b2fc4c52e923af'
  }

  /**
   * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
   * for this operation will be unreserved on success.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `threshold`: The total number of approvals for this dispatch before it is executed.
   * - `other_signatories`: The accounts (other than the sender) who can approve this
   * dispatch. May not be empty.
   * - `timepoint`: The timepoint (block number and transaction index) of the first approval
   * transaction for this dispatch.
   * - `call_hash`: The hash of the call to be executed.
   * 
   * # <weight>
   * - `O(S)`.
   * - Up to one balance-reserve or unreserve operation.
   * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
   *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
   * - One encode & hash, both of complexity `O(S)`.
   * - One event.
   * - I/O: 1 read `O(S)`, one remove.
   * - Storage: removes one item.
   * ----------------------------------
   * - DB Weight:
   *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
   *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
   * # </weight>
   */
  get asV1(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v1.Timepoint, callHash: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemAuthorizeUpgradeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.authorize_upgrade')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1(): boolean {
    return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
  }

  get asV1(): {codeHash: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemEnactAuthorizedUpgradeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.enact_authorized_upgrade')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1(): boolean {
    return this._chain.getCallHash('ParachainSystem.enact_authorized_upgrade') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  get asV1(): {code: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemSetUpgradeBlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.set_upgrade_block')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Force an already scheduled validation function upgrade to happen on a particular block.
   * 
   * Note that coordinating this block for the upgrade has to happen independently on the
   * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
   * and this bypasses all checks and and normal protocols. Very easy to brick your chain
   * if done wrong.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('ParachainSystem.set_upgrade_block') === '4552b4c9a331e27653dd826226a620c7ef63c4af553ba86f11cdfd63fb1b1028'
  }

  /**
   * Force an already scheduled validation function upgrade to happen on a particular block.
   * 
   * Note that coordinating this block for the upgrade has to happen independently on the
   * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
   * and this bypasses all checks and and normal protocols. Very easy to brick your chain
   * if done wrong.
   */
  get asV1(): {relayChainBlock: number} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemSetValidationDataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.set_validation_data')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the current validation data.
   * 
   * This should be invoked exactly once per block. It will panic at the finalization
   * phase if the call was not invoked.
   * 
   * The dispatch origin for this call must be `Inherent`
   * 
   * As a side effect, this function upgrades the current validation function
   * if the appropriate time has come.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('ParachainSystem.set_validation_data') === 'df843f97e4c625e033541d5f205c5889f3131bdb4549570310e924d96769c1cd'
  }

  /**
   * Set the current validation data.
   * 
   * This should be invoked exactly once per block. It will panic at the finalization
   * phase if the call was not invoked.
   * 
   * The dispatch origin for this call must be `Inherent`
   * 
   * As a side effect, this function upgrades the current validation function
   * if the appropriate time has come.
   */
  get asV1(): {data: v1.ParachainInherentData} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemSudoSendUpwardMessageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.sudo_send_upward_message')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1(): boolean {
    return this._chain.getCallHash('ParachainSystem.sudo_send_upward_message') === '34457b6daded32ddc4ec3a5a21e34b9af8dcd7d190a5a7833fa8a7ed53b31206'
  }

  get asV1(): {message: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmExecuteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.execute')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Execute an XCM message from a local, signed, origin.
   * 
   * An event is deposited indicating whether `msg` could be executed completely or only
   * partially.
   * 
   * No more than `max_weight` will be used in its attempted execution. If this is less than the
   * maximum amount of weight that the message could take to be executed, then no execution
   * attempt will be made.
   * 
   * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
   * to completion; only that *some* of it was executed.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('PolkadotXcm.execute') === 'c6251691ab3319ecee95442d381c308f9ada155e423798c908cbd6b063aa26b4'
  }

  /**
   * Execute an XCM message from a local, signed, origin.
   * 
   * An event is deposited indicating whether `msg` could be executed completely or only
   * partially.
   * 
   * No more than `max_weight` will be used in its attempted execution. If this is less than the
   * maximum amount of weight that the message could take to be executed, then no execution
   * attempt will be made.
   * 
   * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
   * to completion; only that *some* of it was executed.
   */
  get asV15(): {message: v15.Type_226, maxWeight: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceDefaultXcmVersionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_default_xcm_version')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set a safe XCM version (the version that XCM should be encoded with if the most recent
   * version a destination can accept is unknown).
   * 
   * - `origin`: Must be Root.
   * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
  }

  /**
   * Set a safe XCM version (the version that XCM should be encoded with if the most recent
   * version a destination can accept is unknown).
   * 
   * - `origin`: Must be Root.
   * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
   */
  get asV15(): {maybeXcmVersion: (number | undefined)} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceSubscribeVersionNotifyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_subscribe_version_notify')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Ask a location to notify us regarding their XCM version and any changes to it.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we should subscribe for XCM version notifications.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
  }

  /**
   * Ask a location to notify us regarding their XCM version and any changes to it.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we should subscribe for XCM version notifications.
   */
  get asV15(): {location: v15.VersionedMultiLocation} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceUnsubscribeVersionNotifyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_unsubscribe_version_notify')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Require that a particular destination should no longer notify us regarding any XCM
   * version changes.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we are currently subscribed for XCM version
   *   notifications which we no longer desire.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_unsubscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
  }

  /**
   * Require that a particular destination should no longer notify us regarding any XCM
   * version changes.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we are currently subscribed for XCM version
   *   notifications which we no longer desire.
   */
  get asV15(): {location: v15.VersionedMultiLocation} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceXcmVersionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_xcm_version')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Extoll that a particular destination can be communicated with through a particular
   * version of XCM.
   * 
   * - `origin`: Must be Root.
   * - `location`: The destination that is being described.
   * - `xcm_version`: The latest version of XCM that `location` supports.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '3bdd3ba3db54facd962462ff1c2c0ede1b428cf9119b36a4e96fa86916145f75'
  }

  /**
   * Extoll that a particular destination can be communicated with through a particular
   * version of XCM.
   * 
   * - `origin`: Must be Root.
   * - `location`: The destination that is being described.
   * - `xcm_version`: The latest version of XCM that `location` supports.
   */
  get asV15(): {location: v15.V1MultiLocation, xcmVersion: number} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmLimitedReserveTransferAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.limited_reserve_transfer_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination
   * chain and forward a notification XCM.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
   * is needed than `weight_limit`, then the operation will fail and the assets send may be
   * at risk.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination
   * chain and forward a notification XCM.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
   * is needed than `weight_limit`, then the operation will fail and the assets send may be
   * at risk.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get asV15(): {dest: v15.VersionedMultiLocation, beneficiary: v15.VersionedMultiLocation, assets: v15.VersionedMultiAssets, feeAssetItem: number, weightLimit: v15.V2WeightLimit} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmLimitedReserveWithdrawAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.limited_reserve_withdraw_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some assets from sovereign account to reserve holder chain and
   * forward a notification XCM.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
   * with all fees taken as needed from the asset.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get isV23(): boolean {
    return this._chain.getCallHash('PolkadotXcm.limited_reserve_withdraw_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
  }

  /**
   * Transfer some assets from sovereign account to reserve holder chain and
   * forward a notification XCM.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
   * with all fees taken as needed from the asset.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get asV23(): {dest: v23.VersionedMultiLocation, beneficiary: v23.VersionedMultiLocation, assets: v23.VersionedMultiAssets, feeAssetItem: number, weightLimit: v23.V2WeightLimit} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmLimitedTeleportAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.limited_teleport_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
   * is needed than `weight_limit`, then the operation will fail and the assets send may be
   * at risk.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
   * is needed than `weight_limit`, then the operation will fail and the assets send may be
   * at risk.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get asV15(): {dest: v15.VersionedMultiLocation, beneficiary: v15.VersionedMultiLocation, assets: v15.VersionedMultiAssets, feeAssetItem: number, weightLimit: v15.V2WeightLimit} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmReserveTransferAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.reserve_transfer_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination
   * chain and forward a notification XCM.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
   * with all fees taken as needed from the asset.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination
   * chain and forward a notification XCM.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
   * with all fees taken as needed from the asset.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   */
  get asV15(): {dest: v15.VersionedMultiLocation, beneficiary: v15.VersionedMultiLocation, assets: v15.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmReserveWithdrawAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.reserve_withdraw_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some assets from sovereign account to reserve holder chain and
   * forward a notification XCM.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
   * with all fees taken as needed from the asset.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   */
  get isV23(): boolean {
    return this._chain.getCallHash('PolkadotXcm.reserve_withdraw_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
  }

  /**
   * Transfer some assets from sovereign account to reserve holder chain and
   * forward a notification XCM.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
   * with all fees taken as needed from the asset.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   */
  get asV23(): {dest: v23.VersionedMultiLocation, beneficiary: v23.VersionedMultiLocation, assets: v23.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmSendCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.send')
    this._chain = ctx._chain
    this.call = call
  }

  get isV15(): boolean {
    return this._chain.getCallHash('PolkadotXcm.send') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
  }

  get asV15(): {dest: v15.VersionedMultiLocation, message: v15.VersionedXcm} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmTeleportAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.teleport_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
   * with all fees taken as needed from the asset.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('PolkadotXcm.teleport_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the asset in the `assets` vector of
   * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
   * with all fees taken as needed from the asset.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   */
  get asV15(): {dest: v15.VersionedMultiLocation, beneficiary: v15.VersionedMultiLocation, assets: v15.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class SessionPurgeKeysCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Session.purge_keys')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Removes any session key(s) of the function caller.
   * This doesn't take effect until the next session.
   * 
   * The dispatch origin of this function must be signed.
   * 
   * # <weight>
   * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
   *   of `T::Keys::key_ids()` which is fixed.
   * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
   * - DbWrites: `NextKeys`, `origin account`
   * - DbWrites per key id: `KeyOwner`
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Removes any session key(s) of the function caller.
   * This doesn't take effect until the next session.
   * 
   * The dispatch origin of this function must be signed.
   * 
   * # <weight>
   * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
   *   of `T::Keys::key_ids()` which is fixed.
   * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
   * - DbWrites: `NextKeys`, `origin account`
   * - DbWrites per key id: `KeyOwner`
   * # </weight>
   */
  get asV1(): null {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SessionSetKeysCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Session.set_keys')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Sets the session key(s) of the function caller to `keys`.
   * Allows an account to set its session key prior to becoming a validator.
   * This doesn't take effect until the next session.
   * 
   * The dispatch origin of this function must be signed.
   * 
   * # <weight>
   * - Complexity: `O(1)`. Actual cost depends on the number of length of
   *   `T::Keys::key_ids()` which is fixed.
   * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
   * - DbWrites: `origin account`, `NextKeys`
   * - DbReads per key id: `KeyOwner`
   * - DbWrites per key id: `KeyOwner`
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Session.set_keys') === 'c0b44bc08ddc0ad90c1bd05300acef09fd979fcb434b3b92b011e7817fd56c2f'
  }

  /**
   * Sets the session key(s) of the function caller to `keys`.
   * Allows an account to set its session key prior to becoming a validator.
   * This doesn't take effect until the next session.
   * 
   * The dispatch origin of this function must be signed.
   * 
   * # <weight>
   * - Complexity: `O(1)`. Actual cost depends on the number of length of
   *   `T::Keys::key_ids()` which is fixed.
   * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
   * - DbWrites: `origin account`, `NextKeys`
   * - DbReads per key id: `KeyOwner`
   * - DbWrites per key id: `KeyOwner`
   * # </weight>
   */
  get asV1(): {keys: v1.SessionKeys, proof: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSetKeyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.set_key')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
   * key.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB change.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.set_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
  }

  /**
   * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
   * key.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB change.
   * # </weight>
   */
  get asV1(): {new: v1.MultiAddress} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '97b7e267e4dbfb82263207e101776a102a4311c72eafdd3c88301a12c3ba9a14'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV1(): {call: v1.Call} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '417aa132080697aa8c0c0679e7f03adfdd74a313bd7a932b1f5f9e5ebce187f6'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV3(): {call: v3.Call} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV4(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '507586e76d7c66816f9308e6af97d245f2bab9fa2cdf602fa5c45a6ad54b35b2'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV4(): {call: v4.Call} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV9(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'ce0c05684fe619793dca32f58672361b9ca2fa78f9db0923e85d6b6e26ad3250'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV9(): {call: v9.Call} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV12(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'ff34d1dab7f9f0ce8167e22172b6f6907fd6d6d545236f0ce4f0537adabf8c7a'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV12(): {call: v12.Call} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV13(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '057905bbaa8ceb7dd53e11cbdd1875786c56ec81e875e298cab00835e8264683'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV13(): {call: v13.Call} {
    assert(this.isV13)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '6d6c57d50b827bc33a61c430fa2fa18f29a9d1a9397e7c90987bd8b17cf0d3c6'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV15(): {call: v15.Call} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '38cb5609111447d118a648642c56a2f0ffde3f029d55bcbadfeedd3d1cd1c6ba'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV16(): {call: v16.Call} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV17(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'c44f147315d653671c7564f5199f6ca2fd0e1c66eaa969c2f82e8ab19d4fc3a5'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV17(): {call: v17.Call} {
    assert(this.isV17)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV23(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'e9a5afb31217b3813f37f8c29aabf63c63678426cad540396303773f052d651f'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV23(): {call: v23.Call} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoAsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo_as')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '0a1cdbbfbba13c52b6ebf5dfa79d1060ca0340da9dcbad2171bef09763455fa8'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV1(): {who: v1.MultiAddress, call: v1.Call} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '84a943144e7ab5d329b7c98b01bf874f2ca4f4d0a0b6fd06ce32eb9f40cb54a6'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV3(): {who: v3.MultiAddress, call: v3.Call} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV4(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '9c3855e84b95df2d520b4b5b51a9fa180efd66d0b487ab0dfe315b199f2f20a8'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV4(): {who: v4.MultiAddress, call: v4.Call} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV9(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '3673b51f3003f1af43dbb4fa6efb688f8aa6254e064b1b34ce1c69c1ddedd612'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV9(): {who: v9.MultiAddress, call: v9.Call} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV12(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '5cf70187a11f4b204c82b79eee7ccc58020fd5b44d70711496cdd1e60540d264'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV12(): {who: v12.MultiAddress, call: v12.Call} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV13(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '2035aba3059eadfeb921fb941f3b3136bced33a025c5752e5d66c2db7373bad8'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV13(): {who: v13.MultiAddress, call: v13.Call} {
    assert(this.isV13)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '5671a48ddac1e7031cc227a71134c602408a95426d5a3bcd7901b32f8730005f'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV15(): {who: v15.MultiAddress, call: v15.Call} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '68027b634701b0c18951fc21fb1361f793c6a3c68e371d8596a4a41f591fc3e7'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV16(): {who: v16.MultiAddress, call: v16.Call} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV17(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '787ddc8d393c48e179c785a06e5e40cb1a8d4dc4c53b6d74ae50b7ada364facc'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV17(): {who: v17.MultiAddress, call: v17.Call} {
    assert(this.isV17)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV23(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '91e31430fed3b4eb05731344e147569eaa56db03538644c16c994703ea21377e'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV23(): {who: v23.MultiAddress, call: v23.Call} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoUncheckedWeightCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo_unchecked_weight')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '719549758944be80c5884a3b2a23837ade5565e3a63f9e3fc7687413d37cc623'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV1(): {call: v1.Call, weight: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'cfb41e6ea2d3a1813b0d76c0663b5d41da7c4b82a2bbda18bc65f1fbb5150400'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV3(): {call: v3.Call, weight: bigint} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV4(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '127436b10418e7872b6f526039b6842297d3ebf17ad1e8c16b0eb17db4985586'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV4(): {call: v4.Call, weight: bigint} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV9(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '534247d030dc30881205c92d52c8f7a8538b860d839440ad2bdb04da592fd571'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV9(): {call: v9.Call, weight: bigint} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV12(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'd8e57864d5c7ef59d875e54c47d813734070dcfc5f42e7ea87e7f7e952a82150'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV12(): {call: v12.Call, weight: bigint} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV13(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '08d9a21e1edb7ed2d34ff8ca09e8202772cb194fef25701fd9b0356a8dc5aba3'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV13(): {call: v13.Call, weight: bigint} {
    assert(this.isV13)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '45df7f73c2e0b875c492865422c994a5961f690bfc4e8d9143d0284267cb98fc'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV15(): {call: v15.Call, weight: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '22b0f5fe0d292adf102bfebbb62e833db58b9cb923236b02e05c62cde4c95ea4'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV16(): {call: v16.Call, weight: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV17(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '30db0dc24bd71b5577471fea2b2b1e34ab5a414f5cf6eac24cc0a174ecfca82e'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV17(): {call: v17.Call, weight: bigint} {
    assert(this.isV17)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV23(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '0a70780c5065739de4466032e2b0b41a1a662ffae483352662a2ccb156060cce'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV23(): {call: v23.Call, weight: bigint} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemFillBlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.fill_block')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * A dispatch that will fill the block weight up to the given ratio.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
  }

  /**
   * A dispatch that will fill the block weight up to the given ratio.
   */
  get asV1(): {ratio: number} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemKillPrefixCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.kill_prefix')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Kill all storage items with a key that starts with the given prefix.
   * 
   * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   * the prefix we are removing to accurately calculate the weight of this function.
   * 
   * # <weight>
   * - `O(P)` where `P` amount of keys with prefix `prefix`
   * - `P` storage deletions.
   * - Base Weight: 0.834 * P µs
   * - Writes: Number of subkeys + 1
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
  }

  /**
   * Kill all storage items with a key that starts with the given prefix.
   * 
   * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   * the prefix we are removing to accurately calculate the weight of this function.
   * 
   * # <weight>
   * - `O(P)` where `P` amount of keys with prefix `prefix`
   * - `P` storage deletions.
   * - Base Weight: 0.834 * P µs
   * - Writes: Number of subkeys + 1
   * # </weight>
   */
  get asV1(): {prefix: Uint8Array, subkeys: number} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemKillStorageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.kill_storage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Kill some items from storage.
   * 
   * # <weight>
   * - `O(IK)` where `I` length of `keys` and `K` length of one key
   * - `I` storage deletions.
   * - Base Weight: .378 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
  }

  /**
   * Kill some items from storage.
   * 
   * # <weight>
   * - `O(IK)` where `I` length of `keys` and `K` length of one key
   * - `I` storage deletions.
   * - Base Weight: .378 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get asV1(): {keys: Uint8Array[]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemRemarkCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.remark')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Make some on-chain remark.
   * 
   * # <weight>
   * - `O(1)`
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   * Make some on-chain remark.
   * 
   * # <weight>
   * - `O(1)`
   * # </weight>
   */
  get asV1(): {remark: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemRemarkWithEventCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.remark_with_event')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Make some on-chain remark and emit event.
   * 
   * # <weight>
   * - `O(b)` where b is the length of the remark.
   * - 1 event.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   * Make some on-chain remark and emit event.
   * 
   * # <weight>
   * - `O(b)` where b is the length of the remark.
   * - 1 event.
   * # </weight>
   */
  get asV1(): {remark: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetChangesTrieConfigCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_changes_trie_config')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the new changes trie configuration.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write or delete (codec `O(1)`).
   * - 1 call to `deposit_log`: Uses `append` API, so O(1)
   * - Base Weight: 7.218 µs
   * - DB Weight:
   *     - Writes: Changes Trie, System Digest
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
  }

  /**
   * Set the new changes trie configuration.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write or delete (codec `O(1)`).
   * - 1 call to `deposit_log`: Uses `append` API, so O(1)
   * - Base Weight: 7.218 µs
   * - DB Weight:
   *     - Writes: Changes Trie, System Digest
   * # </weight>
   */
  get asV1(): {changesTrieConfig: (v1.ChangesTrieConfiguration | undefined)} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetCodeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_code')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the new runtime code.
   * 
   * # <weight>
   * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
   * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
   *   expensive).
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime, but generally this is very
   * expensive. We will treat this as a full block.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  /**
   * Set the new runtime code.
   * 
   * # <weight>
   * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
   * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
   *   expensive).
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime, but generally this is very
   * expensive. We will treat this as a full block.
   * # </weight>
   */
  get asV1(): {code: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetCodeWithoutChecksCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_code_without_checks')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the new runtime code without doing any checks of the given `code`.
   * 
   * # <weight>
   * - `O(C)` where `C` length of `code`
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime. We will treat this as a full
   * block. # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  /**
   * Set the new runtime code without doing any checks of the given `code`.
   * 
   * # <weight>
   * - `O(C)` where `C` length of `code`
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime. We will treat this as a full
   * block. # </weight>
   */
  get asV1(): {code: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetHeapPagesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_heap_pages')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the number of pages in the WebAssembly environment's heap.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write.
   * - Base Weight: 1.405 µs
   * - 1 write to HEAP_PAGES
   * - 1 digest item
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
  }

  /**
   * Set the number of pages in the WebAssembly environment's heap.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write.
   * - Base Weight: 1.405 µs
   * - 1 write to HEAP_PAGES
   * - 1 digest item
   * # </weight>
   */
  get asV1(): {pages: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetStorageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_storage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set some items of storage.
   * 
   * # <weight>
   * - `O(I)` where `I` length of `items`
   * - `I` storage writes (`O(1)`).
   * - Base Weight: 0.568 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
  }

  /**
   * Set some items of storage.
   * 
   * # <weight>
   * - `O(I)` where `I` length of `items`
   * - `I` storage writes (`O(1)`).
   * - Base Weight: 0.568 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get asV1(): {items: [Uint8Array, Uint8Array][]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class TimestampSetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Timestamp.set')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the current time.
   * 
   * This call should be invoked exactly once per block. It will panic at the finalization
   * phase, if this call hasn't been invoked by that time.
   * 
   * The timestamp should be greater than the previous one by the amount specified by
   * `MinimumPeriod`.
   * 
   * The dispatch origin for this call must be `Inherent`.
   * 
   * # <weight>
   * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
   * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
   *   `on_finalize`)
   * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
  }

  /**
   * Set the current time.
   * 
   * This call should be invoked exactly once per block. It will panic at the finalization
   * phase, if this call hasn't been invoked by that time.
   * 
   * The timestamp should be greater than the previous one by the amount specified by
   * `MinimumPeriod`.
   * 
   * The dispatch origin for this call must be `Inherent`.
   * 
   * # <weight>
   * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
   * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
   *   `on_finalize`)
   * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
   * # </weight>
   */
  get asV1(): {now: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityAsDerivativeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.as_derivative')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '1ed6a4852c8eed7a0f9035b652691abbd61a0bb33c7fff585b7bae948b16ae28'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV1(): {index: number, call: v1.Call} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '36bdb264fa370934c996f99311abc8669265c3712ba004544c2c4f4468684edf'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV3(): {index: number, call: v3.Call} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV4(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '8eb22865b10757c3c74a7d182dadc610dfc4d12632226a8498b5da021ea86a91'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV4(): {index: number, call: v4.Call} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV9(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '709c62416482bf0170315b7594db370655d7b206aa3537fceff41666d20eb34f'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV9(): {index: number, call: v9.Call} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV12(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '55efda2fed562548a56e626a008063b5156a51047d9210c38017a474ff3c8abf'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV12(): {index: number, call: v12.Call} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV13(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === 'b37d20ac53d6ae262a4558184242f64a4efc6dee817b3f346c8ffac080cb8dae'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV13(): {index: number, call: v13.Call} {
    assert(this.isV13)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === 'b0285fa5e3d340722f4ec8d5f61b480ed81cfd52a97fe9f8dd29696a24858d5d'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV15(): {index: number, call: v15.Call} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '3bd4aaf30c86f161d8fa5ba6e536640f292b72a5c7bae5b309c46bf0b88c8202'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV16(): {index: number, call: v16.Call} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV17(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '664b4c658bdc5facda34dced0d1df9e4e94e496d40055548e10a9c346964df34'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV17(): {index: number, call: v17.Call} {
    assert(this.isV17)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV23(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '54a77ddbe0ae4a20485072a56540ccaecbdb314bcce9852debbb689ae65457a1'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV23(): {index: number, call: v23.Call} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityBatchCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.batch')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Utility.batch') === '6c85ceafe04343226f6ad93d5f42ae980ecf1d2df54f3be092d87d5ed0574a21'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV1(): {calls: v1.Call[]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'c04acc0eeaca90c32ddda3c488590b417db6964fbab4edfe6dbfb18d93f52808'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV3(): {calls: v3.Call[]} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV4(): boolean {
    return this._chain.getCallHash('Utility.batch') === '1d7040ccaeaf7e1df574aa9170b5c2a66f02e7543b59b0021956a1b8bd7816dd'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV4(): {calls: v4.Call[]} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV9(): boolean {
    return this._chain.getCallHash('Utility.batch') === '2ca50f8b44cd341321841de4c8f6bc8c1b499c15735b142b8c7926f106055f91'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV9(): {calls: v9.Call[]} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV12(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'f07cbe0e6f86821c94a91f1e97248a5521ad3f6a31da617323cab24b1182fe92'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV12(): {calls: v12.Call[]} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV13(): boolean {
    return this._chain.getCallHash('Utility.batch') === '6b8d5f8cdd0e1d6b1d0b4f37101f20d2326f3199f68f6e3dae6fafd1f0dd5003'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV13(): {calls: v13.Call[]} {
    assert(this.isV13)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'e4c9eeb383f9b82de8306105f68426e943deb2525db4237c11510af6e9b2a532'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV15(): {calls: v15.Call[]} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Utility.batch') === '3ad505c27c80def201194ed70c9117f91a8d7e2dab1da95e9b94e7f136b1d950'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV16(): {calls: v16.Call[]} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV17(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'fd2538f27209943ed093278d1f498bb53087a7aeb2f728de22e54b72dd64d743'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV17(): {calls: v17.Call[]} {
    assert(this.isV17)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV23(): boolean {
    return this._chain.getCallHash('Utility.batch') === '3366703bd5c4f23569fdb8f11ad8c83321f274cc03954fd91f3791599bc5e430'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV23(): {calls: v23.Call[]} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityBatchAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.batch_all')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '6c85ceafe04343226f6ad93d5f42ae980ecf1d2df54f3be092d87d5ed0574a21'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV1(): {calls: v1.Call[]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'c04acc0eeaca90c32ddda3c488590b417db6964fbab4edfe6dbfb18d93f52808'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV3(): {calls: v3.Call[]} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV4(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '1d7040ccaeaf7e1df574aa9170b5c2a66f02e7543b59b0021956a1b8bd7816dd'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV4(): {calls: v4.Call[]} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV9(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '2ca50f8b44cd341321841de4c8f6bc8c1b499c15735b142b8c7926f106055f91'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV9(): {calls: v9.Call[]} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV12(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'f07cbe0e6f86821c94a91f1e97248a5521ad3f6a31da617323cab24b1182fe92'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV12(): {calls: v12.Call[]} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV13(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '6b8d5f8cdd0e1d6b1d0b4f37101f20d2326f3199f68f6e3dae6fafd1f0dd5003'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV13(): {calls: v13.Call[]} {
    assert(this.isV13)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'e4c9eeb383f9b82de8306105f68426e943deb2525db4237c11510af6e9b2a532'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV15(): {calls: v15.Call[]} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '3ad505c27c80def201194ed70c9117f91a8d7e2dab1da95e9b94e7f136b1d950'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV16(): {calls: v16.Call[]} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV17(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'fd2538f27209943ed093278d1f498bb53087a7aeb2f728de22e54b72dd64d743'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV17(): {calls: v17.Call[]} {
    assert(this.isV17)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV23(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '3366703bd5c4f23569fdb8f11ad8c83321f274cc03954fd91f3791599bc5e430'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV23(): {calls: v23.Call[]} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityDispatchAsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.dispatch_as')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '241d52352667068bafca2e5eaa537619a0cbba63f9863e9541ebb802103da43f'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV3(): {asOrigin: v3.OriginCaller, call: v3.Call} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV4(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '222f2ba4237117742ac36df2d1b26385876ad391cf800f124cee3a85d924e3f8'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV4(): {asOrigin: v4.OriginCaller, call: v4.Call} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV9(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === 'd05315ae020084d4b151cdc7e90a288030b703fbe4b238367fdc16edd2a901b5'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV9(): {asOrigin: v9.OriginCaller, call: v9.Call} {
    assert(this.isV9)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV12(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === 'ab793ea4a25197fd6ef27402adf617b264c3bf0452d7a4b4d01ce29c4c292db6'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV12(): {asOrigin: v12.OriginCaller, call: v12.Call} {
    assert(this.isV12)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV13(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '0c7f882e46adadc364c2362cc19bee6f366bdfe616518a63c6ac63095e65f697'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV13(): {asOrigin: v13.OriginCaller, call: v13.Call} {
    assert(this.isV13)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV15(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '7de7a86178c15c49d7e2cb11acad98fe066d6834dda489a38326028ef3f8e13f'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV15(): {asOrigin: v15.OriginCaller, call: v15.Call} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === 'bdeb1d194fb51f1cd3acddcffb1cdf5137fb6c261c279c7d6e90425bac481afe'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV16(): {asOrigin: v16.OriginCaller, call: v16.Call} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV17(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === 'ad37f86e6fb7b9512701b796ba5e0befc40c8a039b00a271dea9630830967dfa'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV17(): {asOrigin: v17.OriginCaller, call: v17.Call} {
    assert(this.isV17)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV23(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '9563e25b0b369c92f19bc32bbd94144a2ffbfc0e8766d17833f73f864eb0ca51'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV23(): {asOrigin: v23.OriginCaller, call: v23.Call} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityForceBatchCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.force_batch')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Send a batch of dispatch calls.
   * Unlike `batch`, it allows errors and won't interrupt.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV23(): boolean {
    return this._chain.getCallHash('Utility.force_batch') === '3366703bd5c4f23569fdb8f11ad8c83321f274cc03954fd91f3791599bc5e430'
  }

  /**
   * Send a batch of dispatch calls.
   * Unlike `batch`, it allows errors and won't interrupt.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV23(): {calls: v23.Call[]} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingForceUpdateSchedulesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.force_update_schedules')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Force update vesting schedule.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * - `schedule_index`: index of the schedule to update.
   * - `schedule`: The vesting schedule attached to the transfer.
   * 
   * # <weight>
   * - `O(1)`.
   * - DbWeight: 1 Writes
   *     - Writes: Vesting Storage
   * # </weight>
   */
  get isV4(): boolean {
    return this._chain.getCallHash('Vesting.force_update_schedules') === 'dd9e4f70e62b1c318a1104907cf638d2b1e62db20cb35d46ba038ceb303b2c06'
  }

  /**
   * Force update vesting schedule.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * - `schedule_index`: index of the schedule to update.
   * - `schedule`: The vesting schedule attached to the transfer.
   * 
   * # <weight>
   * - `O(1)`.
   * - DbWeight: 1 Writes
   *     - Writes: Vesting Storage
   * # </weight>
   */
  get asV4(): {target: v4.MultiAddress, schedules: v4.VestingInfo[]} {
    assert(this.isV4)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingForceVestedTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.force_vested_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Force a vested transfer.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * - `source`: The account whose funds should be transferred.
   * - `target`: The account that should be transferred the vested funds.
   * - `schedule`: The vesting schedule attached to the transfer.
   * 
   * Emits `VestingCreated`.
   * 
   * NOTE: This will unlock all schedules through the current block.
   * 
   * # <weight>
   * - `O(1)`.
   * - DbWeight: 4 Reads, 4 Writes
   *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
   *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Vesting.force_vested_transfer') === 'fcf875d71f02d4cc33d9f1e8fc540430de8155209696fe7c9996d5d479e3d5c3'
  }

  /**
   * Force a vested transfer.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * - `source`: The account whose funds should be transferred.
   * - `target`: The account that should be transferred the vested funds.
   * - `schedule`: The vesting schedule attached to the transfer.
   * 
   * Emits `VestingCreated`.
   * 
   * NOTE: This will unlock all schedules through the current block.
   * 
   * # <weight>
   * - `O(1)`.
   * - DbWeight: 4 Reads, 4 Writes
   *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
   *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
   * # </weight>
   */
  get asV1(): {source: v1.MultiAddress, target: v1.MultiAddress, schedule: v1.VestingInfo} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingMergeSchedulesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.merge_schedules')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
   * the highest possible start and end blocks. If both schedules have already started the
   * current block will be used as the schedule start; with the caveat that if one schedule
   * is finished by the current block, the other will be treated as the new merged schedule,
   * unmodified.
   * 
   * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
   * NOTE: This will unlock all schedules through the current block prior to merging.
   * NOTE: If both schedules have ended by the current block, no new schedule will be created
   * and both will be removed.
   * 
   * Merged schedule attributes:
   * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
   *   current_block)`.
   * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
   * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `schedule1_index`: index of the first schedule to merge.
   * - `schedule2_index`: index of the second schedule to merge.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Vesting.merge_schedules') === 'fc0db27e3f68971976c0913a7fc03f1b8221d054fbbbca956c367c00c0639eea'
  }

  /**
   * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
   * the highest possible start and end blocks. If both schedules have already started the
   * current block will be used as the schedule start; with the caveat that if one schedule
   * is finished by the current block, the other will be treated as the new merged schedule,
   * unmodified.
   * 
   * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
   * NOTE: This will unlock all schedules through the current block prior to merging.
   * NOTE: If both schedules have ended by the current block, no new schedule will be created
   * and both will be removed.
   * 
   * Merged schedule attributes:
   * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
   *   current_block)`.
   * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
   * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `schedule1_index`: index of the first schedule to merge.
   * - `schedule2_index`: index of the second schedule to merge.
   */
  get asV1(): {schedule1Index: number, schedule2Index: number} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingVestCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.vest')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unlock any vested funds of the sender account.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have funds still
   * locked under this pallet.
   * 
   * Emits either `VestingCompleted` or `VestingUpdated`.
   * 
   * # <weight>
   * - `O(1)`.
   * - DbWeight: 2 Reads, 2 Writes
   *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
   *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Vesting.vest') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Unlock any vested funds of the sender account.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have funds still
   * locked under this pallet.
   * 
   * Emits either `VestingCompleted` or `VestingUpdated`.
   * 
   * # <weight>
   * - `O(1)`.
   * - DbWeight: 2 Reads, 2 Writes
   *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
   *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
   * # </weight>
   */
  get asV1(): null {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingVestOtherCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.vest_other')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unlock any vested funds of a `target` account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `target`: The account whose vested funds should be unlocked. Must have funds still
   * locked under this pallet.
   * 
   * Emits either `VestingCompleted` or `VestingUpdated`.
   * 
   * # <weight>
   * - `O(1)`.
   * - DbWeight: 3 Reads, 3 Writes
   *     - Reads: Vesting Storage, Balances Locks, Target Account
   *     - Writes: Vesting Storage, Balances Locks, Target Account
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Vesting.vest_other') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
  }

  /**
   * Unlock any vested funds of a `target` account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `target`: The account whose vested funds should be unlocked. Must have funds still
   * locked under this pallet.
   * 
   * Emits either `VestingCompleted` or `VestingUpdated`.
   * 
   * # <weight>
   * - `O(1)`.
   * - DbWeight: 3 Reads, 3 Writes
   *     - Reads: Vesting Storage, Balances Locks, Target Account
   *     - Writes: Vesting Storage, Balances Locks, Target Account
   * # </weight>
   */
  get asV1(): {target: v1.MultiAddress} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingVestedTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.vested_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Create a vested transfer.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `target`: The account receiving the vested funds.
   * - `schedule`: The vesting schedule attached to the transfer.
   * 
   * Emits `VestingCreated`.
   * 
   * NOTE: This will unlock all schedules through the current block.
   * 
   * # <weight>
   * - `O(1)`.
   * - DbWeight: 3 Reads, 3 Writes
   *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
   *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Vesting.vested_transfer') === 'e10524b55ce1ea33d3b1d4a103e874a701990c6659bea3d0b8c94248699fe975'
  }

  /**
   * Create a vested transfer.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `target`: The account receiving the vested funds.
   * - `schedule`: The vesting schedule attached to the transfer.
   * 
   * Emits `VestingCreated`.
   * 
   * NOTE: This will unlock all schedules through the current block.
   * 
   * # <weight>
   * - `O(1)`.
   * - DbWeight: 3 Reads, 3 Writes
   *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
   *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
   * # </weight>
   */
  get asV1(): {target: v1.MultiAddress, schedule: v1.VestingInfo} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class XcAssetConfigChangeExistingAssetLocationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcAssetConfig.change_existing_asset_location')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the xcm type mapping for a given asset Id.
   * The new asset type will inherit old `units per second` value.
   */
  get isV23(): boolean {
    return this._chain.getCallHash('XcAssetConfig.change_existing_asset_location') === 'ed0ce0fa858d39a6023bbbbfd59032bf44136d520a0a6f81a4cded4ac11bb80f'
  }

  /**
   * Change the xcm type mapping for a given asset Id.
   * The new asset type will inherit old `units per second` value.
   */
  get asV23(): {newAssetLocation: v23.VersionedMultiLocation, assetId: bigint} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class XcAssetConfigRegisterAssetLocationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcAssetConfig.register_asset_location')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register new asset location to asset Id mapping.
   * 
   * This makes the asset eligible for XCM interaction.
   */
  get isV23(): boolean {
    return this._chain.getCallHash('XcAssetConfig.register_asset_location') === 'a7ef28596eb9787bcb8463db3c1bb703b41036feab5e7df7a43e62cd5d164762'
  }

  /**
   * Register new asset location to asset Id mapping.
   * 
   * This makes the asset eligible for XCM interaction.
   */
  get asV23(): {assetLocation: v23.VersionedMultiLocation, assetId: bigint} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class XcAssetConfigRemoveAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcAssetConfig.remove_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Removes all information related to asset, removing it from XCM support.
   */
  get isV23(): boolean {
    return this._chain.getCallHash('XcAssetConfig.remove_asset') === '9fdf9d2d9a262ac1703c42d6937b61b6ff0f6eca6d215f40a7175d553aa66a65'
  }

  /**
   * Removes all information related to asset, removing it from XCM support.
   */
  get asV23(): {assetId: bigint} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class XcAssetConfigRemovePaymentAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcAssetConfig.remove_payment_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Removes asset from the set of supported payment assets.
   * 
   * The asset can still be interacted with via XCM but it cannot be used to pay for execution time.
   */
  get isV23(): boolean {
    return this._chain.getCallHash('XcAssetConfig.remove_payment_asset') === 'd26643923cd4bc9660d0022775958cdfc8de6b72e3e211a239383fa3f2e9175f'
  }

  /**
   * Removes asset from the set of supported payment assets.
   * 
   * The asset can still be interacted with via XCM but it cannot be used to pay for execution time.
   */
  get asV23(): {assetLocation: v23.VersionedMultiLocation} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class XcAssetConfigSetAssetUnitsPerSecondCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcAssetConfig.set_asset_units_per_second')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the amount of units we are charging per execution second
   * for a given AssetLocation.
   */
  get isV23(): boolean {
    return this._chain.getCallHash('XcAssetConfig.set_asset_units_per_second') === '490ec4b913cca173b3062ffb47abfddf91ec93d62c3982a71511ff7584be5ee1'
  }

  /**
   * Change the amount of units we are charging per execution second
   * for a given AssetLocation.
   */
  get asV23(): {assetLocation: v23.VersionedMultiLocation, unitsPerSecond: bigint} {
    assert(this.isV23)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmpQueueResumeXcmExecutionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmpQueue.resume_xcm_execution')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Resumes all XCM executions for the XCMP queue.
   * 
   * Note that this function doesn't change the status of the in/out bound channels.
   * 
   * - `origin`: Must pass `ControllerOrigin`.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('XcmpQueue.resume_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Resumes all XCM executions for the XCMP queue.
   * 
   * Note that this function doesn't change the status of the in/out bound channels.
   * 
   * - `origin`: Must pass `ControllerOrigin`.
   */
  get asV15(): null {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmpQueueServiceOverweightCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmpQueue.service_overweight')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Services a single overweight XCM.
   * 
   * - `origin`: Must pass `ExecuteOverweightOrigin`.
   * - `index`: The index of the overweight XCM to service
   * - `weight_limit`: The amount of weight that XCM execution may take.
   * 
   * Errors:
   * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
   * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
   * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
   * 
   * Events:
   * - `OverweightServiced`: On success.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('XcmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
  }

  /**
   * Services a single overweight XCM.
   * 
   * - `origin`: Must pass `ExecuteOverweightOrigin`.
   * - `index`: The index of the overweight XCM to service
   * - `weight_limit`: The amount of weight that XCM execution may take.
   * 
   * Errors:
   * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
   * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
   * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
   * 
   * Events:
   * - `OverweightServiced`: On success.
   */
  get asV15(): {index: bigint, weightLimit: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmpQueueSuspendXcmExecutionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmpQueue.suspend_xcm_execution')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
   * 
   * - `origin`: Must pass `ControllerOrigin`.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('XcmpQueue.suspend_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
   * 
   * - `origin`: Must pass `ControllerOrigin`.
   */
  get asV15(): null {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmpQueueUpdateDropThresholdCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmpQueue.update_drop_threshold')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Overwrites the number of pages of messages which must be in the queue after which we drop any further
   * messages from the channel.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.drop_threshold`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_drop_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
  }

  /**
   * Overwrites the number of pages of messages which must be in the queue after which we drop any further
   * messages from the channel.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.drop_threshold`
   */
  get asV15(): {new: number} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmpQueueUpdateResumeThresholdCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmpQueue.update_resume_threshold')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
   * message sending may recommence after it has been suspended.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.resume_threshold`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_resume_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
  }

  /**
   * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
   * message sending may recommence after it has been suspended.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.resume_threshold`
   */
  get asV15(): {new: number} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmpQueueUpdateSuspendThresholdCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmpQueue.update_suspend_threshold')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
   * suspend their sending.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.suspend_value`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_suspend_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
  }

  /**
   * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
   * suspend their sending.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.suspend_value`
   */
  get asV15(): {new: number} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmpQueueUpdateThresholdWeightCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmpQueue.update_threshold_weight')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Overwrites the amount of remaining weight under which we stop processing messages.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.threshold_weight`
   */
  get isV15(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
  }

  /**
   * Overwrites the amount of remaining weight under which we stop processing messages.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.threshold_weight`
   */
  get asV15(): {new: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmpQueueUpdateWeightRestrictDecayCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmpQueue.update_weight_restrict_decay')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Overwrites the speed to which the available weight approaches the maximum weight.
   * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
  }

  /**
   * Overwrites the speed to which the available weight approaches the maximum weight.
   * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
   */
  get asV15(): {new: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmpQueueUpdateXcmpMaxIndividualWeightCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmpQueue.update_xcmp_max_individual_weight')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Overwrite the maximum amount of weight any individual message may consume.
   * Messages above this weight go into the overweight queue and may only be serviced explicitly.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
   */
  get isV15(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
  }

  /**
   * Overwrite the maximum amount of weight any individual message may consume.
   * Messages above this weight go into the overweight queue and may only be serviced explicitly.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
   */
  get asV15(): {new: bigint} {
    assert(this.isV15)
    return this._chain.decodeCall(this.call)
  }
}
