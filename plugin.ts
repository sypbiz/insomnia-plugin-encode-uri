export const templateTags: TemplateTag[] = [
    {
        name: "encodeURIComponent",
        displayName: "URI Component",
        description: "encodes or decodes URI component",
        args: [
            {
                displayName: "Action",
                type: "enum",
                options: [
                    {
                        displayName: "Encode",
                        value: "encode"
                    },
                    {
                        displayName: "Decode",
                        value: "decode"
                    }
                ],
            },
            {
                displayName: "Value",
                description: "A string to encode",
                type: "string",
                placeholder: "The string to encode/decode",
            }
        ],
        run(context, action: string, value: string): string {
            switch (action) {
                case "encode":
                    return encodeURIComponent(value || "");
                case "decode":
                    return decodeURIComponent(value || "");
                default:
                    throw new Error(`Invalid action '${action}'. Must be 'encode' or 'decode'.`)
            }
        }
    }
]