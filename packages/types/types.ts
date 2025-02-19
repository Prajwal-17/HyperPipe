import { JsonValue } from "@prisma/client/runtime/library";

export type WorkflowType = {
  id: string,
  userId: string,
  totalActionSteps: number,
  lastCheckedAt: Date,
  Trigger: TriggerType | null,
  actions: ActionsType[]
};

export type TriggerType = {
  id: string,
  workflowId: string,
  connectionId: string,
  appType: string,
  type: string,
  eventType: String,
  config: JsonValue,
}

export type ActionsType = {
  id: string,
  workflowId: string,
  appType: string,
  connectionId: string,
  type: string,
  eventType: string,
  config: JsonValue,
  stepNo: number,
}

export type TaskType = {
  id: string,
  userId: string,
  workflowId: string,
  stepNo: number,
  appType: string,
  connectionId: string,
  eventType: string,
  payload: EmailPayloadType
  status: string
}

export type EmailPayloadType = {
  to: string,
  from: string,
  subject: string,
  body: string,
}