import { Schema, model, models } from 'mongoose';

interface IPrompt {
    creator: Schema.Types.ObjectId;
    message: string;
    tag: string;
}
const PromptSchema = new Schema<IPrompt>({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  message: {
    type: String,
    required: [true, 'Message is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;