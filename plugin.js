"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateTags = [
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
        run(context, action, value) {
            switch (action) {
                case "encode":
                    return encodeURIComponent(value || "");
                case "decode":
                    return decodeURIComponent(value || "");
                default:
                    throw new Error(`Invalid action '${action}'. Must be 'encode' or 'decode'.`);
            }
        }
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxZQUFZLEdBQWtCO0lBQ3ZDO1FBQ0ksSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixXQUFXLEVBQUUsZUFBZTtRQUM1QixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLElBQUksRUFBRTtZQUNGO2dCQUNJLFdBQVcsRUFBRSxRQUFRO2dCQUNyQixJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUU7b0JBQ0w7d0JBQ0ksV0FBVyxFQUFFLFFBQVE7d0JBQ3JCLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsUUFBUTt3QkFDckIsS0FBSyxFQUFFLFFBQVE7cUJBQ2xCO2lCQUNKO2FBQ0o7WUFDRDtnQkFDSSxXQUFXLEVBQUUsT0FBTztnQkFDcEIsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLDZCQUE2QjthQUM3QztTQUNKO1FBQ0QsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFjLEVBQUUsS0FBYTtZQUN0QyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssUUFBUTtvQkFDVCxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyxLQUFLLFFBQVE7b0JBQ1QsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDM0M7b0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsTUFBTSxrQ0FBa0MsQ0FBQyxDQUFBO1lBQ3BGLENBQUM7UUFDTCxDQUFDO0tBQ0o7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlbXBsYXRlVGFnczogVGVtcGxhdGVUYWdbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImVuY29kZVVSSUNvbXBvbmVudFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlVSSSBDb21wb25lbnRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJlbmNvZGVzIG9yIGRlY29kZXMgVVJJIGNvbXBvbmVudFwiLFxyXG4gICAgICAgIGFyZ3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVudW1cIixcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkVuY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJlbmNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJEZWNvZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZGVjb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSBzdHJpbmcgdG8gZW5jb2RlXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiVGhlIHN0cmluZyB0byBlbmNvZGUvZGVjb2RlXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHJ1bihjb250ZXh0LCBhY3Rpb246IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5jb2RlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSB8fCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkZWNvZGVcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYWN0aW9uICcke2FjdGlvbn0nLiBNdXN0IGJlICdlbmNvZGUnIG9yICdkZWNvZGUnLmApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbl0iXX0=