import React,{Component} from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ClassicEditor from '@blowstack/ckeditor5-full-free-build';
export default class AddNewQuesstion extends Component{
    render(){
        return(
            <div className="col-md-10 menu-right col-sm-12 ">
                <CKEditor
                    editor={ClassicEditor}
                    
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    }}
                />
            </div>
        )
    };
}