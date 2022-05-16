// *TypeScript Declaration* file for [react-file-base64](https://www.npmjs.com/package/react-file-base64)
//declare module 'react-file-base64'; // declara as `any`

declare namespace FileBase64Types {
    export type FileInfo = {
        name: string,
        type: string,
        size: string,
        base64: string,
        file: any,
    }
    export type FileBase64Props = {
        multiple: boolean,
        onDone: ( arg: FileInfo | FileInfo[] ) => void,
    };
}

class FileBase64 extends React.Component<FileBase64Types.FileBase64Props> {};

declare module 'react-file-base64' {
    //body of module
    export default FileBase64;
};
