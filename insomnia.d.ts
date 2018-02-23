type RenderContext = {
    // API not finalized yet
};

type TemplateTag = {
    name: string,
    displayName: string,
    description: string,
    run: (context: RenderContext, ...arg: Array<any>) => string,

    args: Array<{
        displayName: string,
        description?: string,
        defaultValue?: string | number | boolean,
        type: 'string' | 'number' | 'enum' | 'model',

        // Only type === 'string'
        placeholder?: string,

        // Only type === 'model'
        modelType?: string,

        // Only type === 'enum'
        options?: Array<{
            displayName: string,
            value: string,
            description?: string
        }>
    }>
}