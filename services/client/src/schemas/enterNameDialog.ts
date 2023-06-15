import { z } from 'zod';

export const enterNameDialogFormSchema = z.object({
  name: z.string().min(1, 'name.required').max(100, 'maxLength'),
});

export type FormSchemaType = z.infer<typeof enterNameDialogFormSchema>;
