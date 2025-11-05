// Auto-generated from pgmetrics model.go
// Do not edit manually. Source: RapidLoop pgmetrics
// Mapping rules:
// - Go numbers (int, int64, float64, etc.) -> number
// - Go strings -> string; bool -> boolean
// - Slices []T -> T[]
// - Maps map[K]V -> Record<string, V> (JSON object keys are strings)
// - Pointers *T -> T | null (and property is optional if `omitempty`)
// - Embedded structs => TS `extends`
// - JSON tags drive property names and optionality
export const ModelSchemaVersion = "1.19" as const;

export interface Model {
  meta: Metadata;
  start_time: number;
  system_identifier: string;
  checkpoint_lsn: string;
  prior_lsn: string;
  redo_lsn: string;
  timeline_id: number;
  next_xid: number;
  oldest_xid: number;
  oldest_active_xid: number;
  checkpoint_time: number;
  wal_flush_lsn: string;
  wal_insert_lsn: string;
  wal_lsn: string;
  is_in_recovery: boolean;
  is_wal_replay_paused: boolean;
  last_wal_receive_lsn: string;
  last_wal_replay_lsn: string;
  last_xact_replay_timestamp: number;
  last_xact_xid: number;
  last_xact_time: number;
  wal_archiving: WALArchiving;
  wal_count: number;
  wal_ready_count: number;
  notification_queue_usage: number;
  replication_outgoing?: ReplicationOut[];
  replication_incoming?: ReplicationIn | null;
  replication_slots?: ReplicationSlot[];
  bg_writer: BGWriter;
  backends: Backend[];
  vacuum_progress?: VacuumProgressBackend[];
  roles: Role[];
  databases?: Database[];
  tablespaces?: Tablespace[];
  tables?: Table[];
  indexes?: Index[];
  sequences?: Sequence[];
  user_functions?: UserFunction[];
  extensions?: Extension[];
  disabled_triggers?: Trigger[];
  statements?: Statement[];
  system?: SystemMetrics | null;
  settings: Record<string, Setting>;
  publications?: Publication[];
  subscriptions?: Subscription[];
  locks?: Lock[];
  blocking_pids?: Record<string, number[]>;
  pgbouncer?: PgBouncer | null;
  highwal?: number;
  plans?: Plan[];
  autovacuums?: AutoVacuum[];
  deadlocks?: Deadlock[];
  rds?: RDS | null;
  betypecounts?: Record<string, number>;
  citus?: Record<string, Citus | null>;
  wal?: WAL | null;
  azure?: Azure | null;
  analyze_progress?: AnalyzeProgressBackend[];
  basebackup_progress?: BasebackupProgressBackend[];
  cluster_progress?: ClusterProgressBackend[];
  copy_progress?: CopyProgressBackend[];
  create_index_progress?: CreateIndexProgressBackend[];
  pgpool?: Pgpool | null;
  log_entries?: LogEntry[];
  checkpointer?: Checkpointer | null;
  connection_tuple?: string;
  full_version?: string;
  conf_load_time?: number;
}

export interface Metadata {
  version: string;
  at: number;
  collected_dbs: string[];
  local: boolean;
  user_agent: string;
  user: string;
  mode: string;
}

export interface SystemMetrics {
  cpu_model?: string;
  num_cores: number;
  loadavg: number;
  memused: number;
  memfree: number;
  membuffers: number;
  memcached: number;
  swapused: number;
  swapfree: number;
  hostname: string;
  memslab?: number;
}

export interface Backend {
  db_name: string;
  role_name: string;
  application_name: string;
  pid: number;
  client_addr: string;
  backend_start: number;
  xact_start: number;
  query_start: number;
  state_change: number;
  wait_event_type: string;
  wait_event: string;
  state: string;
  backend_xid: number;
  backend_xmin: number;
  query: string;
  query_id?: number;
}

export interface ReplicationSlot {
  slot_name: string;
  plugin: string;
  slot_type: string;
  db_name: string;
  active: boolean;
  xmin: number;
  catalog_xmin: number;
  restart_lsn: string;
  confirmed_flush_lsn: string;
  temporary: boolean;
  wal_status?: string;
  safe_wal_size?: number;
  two_phase?: boolean;
  conflicting?: boolean;
}

export interface Role {
  oid: number;
  name: string;
  rolsuper: boolean;
  rolinherit: boolean;
  rolcreaterole: boolean;
  rolcreatedb: boolean;
  rolcanlogin: boolean;
  rolreplication: boolean;
  rolbypassrls: boolean;
  rolconnlimit: number;
  rolvaliduntil: number;
  memberof: string[];
}

export interface Tablespace {
  oid: number;
  name: string;
  owner: string;
  location: string;
  size: number;
  disk_used: number;
  disk_total: number;
  inodes_used: number;
  inodes_total: number;
}

export interface Database {
  oid: number;
  name: string;
  datdba: number;
  dattablespace: number;
  datconnlimit: number;
  age_datfrozenxid: number;
  numbackends: number;
  xact_commit: number;
  xact_rollback: number;
  blks_read: number;
  blks_hit: number;
  tup_returned: number;
  tup_fetched: number;
  tup_inserted: number;
  tup_updated: number;
  tup_deleted: number;
  conflicts: number;
  temp_files: number;
  temp_bytes: number;
  deadlocks: number;
  blk_read_time: number;
  blk_write_time: number;
  stats_reset: number;
  size: number;
  checksum_failures?: number;
  checksum_last_failure?: number;
  session_time?: number;
  active_time?: number;
  idle_in_transaction_time?: number;
  sessions?: number;
  sessions_abandoned?: number;
  sessions_fatal?: number;
  sessions_killed?: number;
  parallel_workers_to_launch?: number;
  parallel_workers_launched?: number;
}

export interface Table {
  oid: number;
  db_name: string;
  schema_name: string;
  name: string;
  seq_scan: number;
  seq_tup_read: number;
  idx_scan: number;
  idx_tup_fetch: number;
  n_tup_ins: number;
  n_tup_upd: number;
  n_tup_del: number;
  n_tup_hot_upd: number;
  n_live_tup: number;
  n_dead_tup: number;
  n_mod_since_analyze: number;
  last_vacuum: number;
  last_autovacuum: number;
  last_analyze: number;
  last_autoanalyze: number;
  vacuum_count: number;
  autovacuum_count: number;
  analyze_count: number;
  autoanalyze_count: number;
  heap_blks_read: number;
  heap_blks_hit: number;
  idx_blks_read: number;
  idx_blks_hit: number;
  toast_blks_read: number;
  toast_blks_hit: number;
  tidx_blks_read: number;
  tidx_blks_hit: number;
  size: number;
  bloat: number;
  relkind: string;
  relpersistence: string;
  relnatts: number;
  age_relfrozenxid: number;
  relispartition: boolean;
  tablespace_name: string;
  parent_name: string;
  partition_cv: string;
  acl?: string;
  n_ins_since_vacuum?: number;
  last_seq_scan?: number;
  last_idx_scan?: number;
  n_tup_newpage_upd?: number;
  total_vacuum_time?: number;
  total_autovacuum_time?: number;
  total_analyze_time?: number;
  total_autoanalyze_time?: number;
}

export interface Index {
  oid: number;
  db_name: string;
  schema_name: string;
  table_oid: number;
  table_name: string;
  name: string;
  idx_scan: number;
  idx_tup_read: number;
  idx_tup_fetch: number;
  idx_blks_read: number;
  idx_blks_hit: number;
  size: number;
  bloat: number;
  relnatts: number;
  amname: string;
  tablespace_name: string;
  def?: string;
  last_idx_scan?: number;
}

export interface Sequence {
  oid: number;
  db_name: string;
  schema_name: string;
  name: string;
  blks_read: number;
  blks_hit: number;
}

export interface UserFunction {
  oid: number;
  schema_name: string;
  db_name: string;
  name: string;
  calls: number;
  total_time: number;
  self_time: number;
}

export interface VacuumProgressBackend {
  db_name: string;
  table_oid: number;
  table_name: string;
  phase: string;
  heap_blks_total: number;
  heap_blks_scanned: number;
  heap_blks_vacuumed: number;
  index_vacuum_count: number;
  max_dead_tuples: number;
  num_dead_tuples: number;
  pid?: number;
  max_dead_tuple_bytes: number;
  dead_tuple_bytess: number;
  num_dead_item_ids?: number;
  indexes_total?: number;
  indexes_processed?: number;
  delay_time?: number;
}

export interface Extension {
  name: string;
  db_name: string;
  default_version: string;
  installed_version: string;
  comment: string;
  schema_name?: string;
}

export interface Setting {
  setting: string;
  bootval?: string;
  source?: string;
  pending?: boolean;
}

export interface WALArchiving {
  archived_count: number;
  last_archived_wal: string;
  last_archived_time: number;
  failed_count: number;
  last_failed_wal: string;
  last_failed_time: number;
  stats_reset: number;
}

export interface BGWriter {
  checkpoints_timed?: number;
  checkpoints_req?: number;
  checkpoint_write_time?: number;
  checkpoint_sync_time?: number;
  buffers_checkpoint?: number;
  buffers_clean: number;
  maxwritten_clean: number;
  buffers_backend?: number;
  buffers_backend_fsync?: number;
  buffers_alloc: number;
  stats_reset: number;
}

export interface ReplicationOut {
  role_name: string;
  application_name: string;
  client_addr: string;
  backend_start: number;
  backend_xmin: number;
  state: string;
  sent_lsn: string;
  write_lsn: string;
  flush_lsn: string;
  replay_lsn: string;
  write_lag: number;
  flush_lag: number;
  replay_lag: number;
  sync_priority: number;
  sync_state: string;
  pid?: number;
  reply_time?: number;
}

export interface ReplicationIn {
  status: string;
  receive_start_lsn: string;
  receive_start_tli: number;
  received_lsn: string;
  received_tli: number;
  last_msg_send_time: number;
  last_msg_receipt_time: number;
  latency_micros: number;
  latest_end_lsn: string;
  latest_end_time: number;
  slot_name: string;
  conninfo: string;
  written_lsn?: string;
  flushed_lsn?: string;
  sender_host?: string;
}

export interface Trigger {
  oid: number;
  db_name: string;
  schema_name: string;
  table_name: string;
  name: string;
  proc_name: string;
}

export interface Statement {
  useroid: number;
  user: string;
  db_oid: number;
  db_name: string;
  queryid: number;
  query: string;
  calls: number;
  total_time: number;
  min_time: number;
  max_time: number;
  stddev_time: number;
  rows: number;
  shared_blks_hit: number;
  shared_blks_read: number;
  shared_blks_dirtied: number;
  shared_blks_written: number;
  local_blks_hit: number;
  local_blks_read: number;
  local_blks_dirtied: number;
  local_blks_written: number;
  temp_blks_read: number;
  temp_blks_written: number;
  blk_read_time: number;
  blk_write_time: number;
  plans?: number;
  total_plan_time?: number;
  min_plan_time?: number;
  max_plan_time?: number;
  stddev_plan_time?: number;
  wal_records?: number;
  wal_fpi?: number;
  wal_bytes?: number;
  toplevel?: boolean;
  temp_blk_read_time?: number;
  temp_blk_write_time?: number;
  jit_functions?: number;
  jit_generation_time?: number;
  jit_inlining_count?: number;
  jit_inlining_time?: number;
  jit_optimization_count?: number;
  jit_optimization_time?: number;
  jit_emission_count?: number;
  jit_emission_time?: number;
  local_blk_read_time?: number;
  local_blk_write_time?: number;
  jit_deform_count?: number;
  jit_deform_time?: number;
  stats_since?: number;
  minmax_stats_since?: number;
  wal_buffers_full?: number;
  parallel_workers_to_launch?: number;
  parallel_workers_launched?: number;
}

export interface Publication {
  oid: number;
  name: string;
  db_name: string;
  alltables: boolean;
  insert: boolean;
  update: boolean;
  delete: boolean;
  table_count: number;
}

export interface Subscription {
  oid: number;
  name: string;
  db_name: string;
  enabled: boolean;
  pub_count: number;
  table_count: number;
  worker_count: number;
  received_lsn: string;
  latest_end_lsn: string;
  last_msg_send_time: number;
  last_msg_receipt_time: number;
  latest_end_time: number;
  latency_micros: number;
  apply_error_count?: number;
  sync_error_count?: number;
}

export interface Lock {
  locktype: string;
  db_name?: string;
  pid: number;
  mode: string;
  granted: boolean;
  relation_oid?: number;
  waitstart?: number;
}

export interface PgBouncer {
  pools?: PgBouncerPool[];
  stats?: PgBouncerStat[];
  dbs?: PgBouncerDatabase[];
  sc_active: number;
  sc_idle: number;
  sc_used: number;
  sc_maxwait: number;
  cc_active: number;
  cc_waiting: number;
  cc_idle: number;
  cc_used: number;
  cc_maxwait: number;
  cc_avgwait: number;
}

export interface PgBouncerPool {
  db_name: string;
  user: string;
  cl_active: number;
  cl_waiting: number;
  sv_active: number;
  sv_idle: number;
  sv_used: number;
  sv_tested: number;
  sv_login: number;
  maxwait: number;
  pool_mode: string;
  cl_cancel_req?: number;
  cl_active_cancel_req?: number;
  cl_waiting_cancel_req?: number;
  sv_active_cancel?: number;
  sv_being_canceled?: number;
}

export interface PgBouncerDatabase {
  db_name: string;
  host: string;
  port: number;
  srcdb_name: string;
  force_user: string;
  max_connections: number;
  current_connections: number;
  paused: boolean;
  disabled: boolean;
}

export interface PgBouncerStat {
  db_name: string;
  total_xact_count: number;
  total_query_count: number;
  total_received: number;
  total_sent: number;
  total_xact_time: number;
  total_query_time: number;
  total_wait_time: number;
  avg_xact_count: number;
  avg_query_count: number;
  avg_received: number;
  avg_sent: number;
  avg_xact_time: number;
  avg_query_time: number;
  avg_wait_time: number;
  total_server_assignment_count?: number;
  avg_server_assignment_count?: number;
}

export interface Plan {
  db_name: string;
  user: string;
  format: string;
  at: number;
  query: string;
  plan: string;
  queryid?: number;
}

export interface AutoVacuum {
  at: number;
  table_name: string;
  elapsed: number;
}

export interface Deadlock {
  at: number;
  detail: string;
}

export interface RDS {
  basic: Record<string, number>;
  enhanced?: Record<string, any>;
}

export interface Citus {
  version: string;
  nodes: CitusNode[];
  statements: CitusStatement[];
  dist_activity?: CitusBackend[];
  worker_activity?: CitusBackend[];
  locks: CitusLock[];
  activity?: CitusBackendV11[];
  tables?: CitusTable[];
  coordinator_nodeid?: number;
  connected_nodeid?: number;
}

export interface CitusNode {
  nodeid: number;
  groupid: number;
  nodename: string;
  nodeport: number;
  noderack: string;
  isactive: boolean;
  noderole: string;
  nodecluster: string;
  shouldhaveshards: boolean;
}

export interface CitusStatement {
  queryid: number;
  useroid: number;
  db_oid: number;
  query: string;
  executor: string;
  partition_key: string;
  calls: number;
}

export interface CitusBackend extends Backend {
  query_hostname: string;
  query_port: number;
  master_query_hostname: string;
  master_query_port: number;
  transaction_number: number;
  transaction_stamp: number;
}

export interface CitusBackendV11 extends Backend {
  global_pid: number;
  node_id: number;
  is_worker_query: boolean;
  backend_type: string;
}

export interface CitusLock {
  waiting_pid?: number;
  blocking_pid?: number;
  blocked_statement: string;
  current_statement_in_blocking_process: string;
  waiting_node_id: number;
  blocking_node_id: number;
  waiting_node_name?: string;
  blocking_node_name?: string;
  waiting_node_port?: number;
  blocking_node_port?: number;
  waiting_gpid?: number;
  blocking_gpid?: number;
}

export interface CitusTable {
  oid: number;
  table_name: string;
  citus_table_type: string;
  distribution_column: string;
  colocation_id: number;
  table_size: number;
  shard_count: number;
  table_owner: string;
  access_method: string;
}

export interface WAL {
  records: number;
  fpi: number;
  bytes: number;
  buffers_full: number;
  write: number;
  sync: number;
  write_time: number;
  sync_time: number;
  stats_reset: number;
}

export interface Azure {
  resource_name: string;
  resource_type: string;
  resource_region: string;
  metrics: Record<string, number>;
}

export interface AnalyzeProgressBackend {
  pid: number;
  db_name: string;
  table_oid: number;
  phase: string;
  sample_blks_total: number;
  sample_blks_scanned: number;
  ext_stats_total: number;
  ext_stats_computed: number;
  child_tables_total: number;
  child_tables_done: number;
  child_oid: number;
  delay_time?: number;
}

export interface BasebackupProgressBackend {
  pid: number;
  phase: string;
  backup_total: number;
  backup_streamed: number;
  tablespaces_total: number;
  tablespaces_streamed: number;
}

export interface ClusterProgressBackend {
  pid: number;
  db_name: string;
  table_oid: number;
  command: string;
  phase: string;
  cluser_index_oid: number;
  heap_tuples_scanned: number;
  heap_tuples_written: number;
  heap_blks_total: number;
  heap_blks_scanned: number;
  index_rebuild_count: number;
}

export interface CopyProgressBackend {
  pid: number;
  db_name: string;
  table_oid: number;
  command: string;
  type: string;
  bytes_processed: number;
  bytes_total: number;
  tuples_processed: number;
  tuples_excluded: number;
}

export interface CreateIndexProgressBackend {
  pid: number;
  db_name: string;
  table_oid: number;
  index_oid: number;
  command: string;
  phase: string;
  lockers_total: number;
  lockers_done: number;
  current_locker_pid: number;
  blocks_total: number;
  blocks_done: number;
  tuples_total: number;
  tuples_done: number;
  partitions_total: number;
  partitions_done: number;
}

export interface Pgpool {
  version: string;
  backends: PgpoolBackend[];
  query_cache: PgpoolQueryCache;
}

export interface PgpoolBackend {
  node_id: number;
  hostname: string;
  port: number;
  status: string;
  pg_status?: string;
  lb_weight: number;
  role: string;
  pg_role?: string;
  select_cnt: number;
  insert_cnt?: number;
  update_cnt?: number;
  delete_cnt?: number;
  ddl_cnt?: number;
  other_cnt?: number;
  panic_cnt?: number;
  fatal_cnt?: number;
  error_cnt?: number;
  load_balance_node: boolean;
  replication_delay?: number;
  replication_state?: string;
  replication_sync_state?: string;
  last_status_change: number;
  total_count?: number;
  success_count?: number;
  fail_count?: number;
  skip_count?: number;
  retry_count?: number;
  average_retry_count?: number;
  max_retry_count?: number;
  max_duration?: number;
  min_duration?: number;
  average_duration?: number;
  last_health_check?: number;
  last_successful_health_check?: number;
  last_skip_health_check?: number;
  last_failed_health_check?: number;
  replication_delay_secs?: number;
}

export interface PgpoolQueryCache {
  num_cache_hits: number;
  num_selects: number;
  cache_hit_ratio: number;
  num_hash_entries: number;
  used_hash_entries: number;
  num_cache_entries: number;
  used_cache_entries_size: number;
  free_cache_entries_size: number;
  fragment_cache_entries_size: number;
}

export interface LogEntry {
  at: number;
  atfull: string;
  user?: string;
  db_name?: string;
  queryid?: number;
  level?: string;
  line?: string;
  extra?: LogEntryExtra[];
}

export interface LogEntryExtra {
  level?: string;
  line?: string;
}

export interface Checkpointer {
  num_timed: number;
  num_requested: number;
  restartpoints_timed: number;
  restartpoints_req: number;
  restartpoints_done: number;
  write_time: number;
  sync_time: number;
  buffers_written: number;
  stats_reset: number;
  num_done?: number;
  slru_written?: number;
}
