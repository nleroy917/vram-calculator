export type Unit = "MiB" | "GiB"

export enum Precision {
  full,
  mixed,
  half,
}

export enum Optimizer {
  Adam,
  SGD,
}

export enum AttentionType {
  Vanilla,
  Flash
}

export interface ModelConfig {
  numParams: number
  hiddenSize: number
  vocabSize: number
  numAttentionHeads: number
  numKeyValueHeads: number
  intermediateSize: number
  numLayers: number
  attentionType?: AttentionType
}

export interface RunConfig {
  isTraining: boolean
  inferencePrecision: Precision.full | Precision.half
  trainingPrecision: Precision.full | Precision.mixed
  optimizer: Optimizer
  optimizerSGDMomentum: boolean
  sequenceLength: number
  batchSize: number
  numGPUs: number
  isFSDP: boolean
  isInferenceModelParallelism: boolean
}

export interface ResultEstimation {
  cudaKernels: number
  parameters: number
  outputs?: number
  activations?: number
  gradients?: number
  firstMoments?: number
  secondMoments?: number
}
