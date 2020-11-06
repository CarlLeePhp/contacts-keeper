This is the second project practice of Brad Traversy's Course.

## Server Side
### Configuration
config/default.json
```
"mongoURI": "your-db-link",
"jwtSecret": "a-string-for-secret"
```

### Notes
#### Server Discovery and Monitoring Engine
There was a warning about it is deprecated. The option, useUnifiedTopology, should be added.

```
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
```

## Client Side
### Configuration
fontawesome: client/public/index.html
Replace 'your-code' by your code.
```
<script src="https://kit.fontawesome.com/your-code.js" crossorigin="anonymous"></script>
```

### Some Packages were Updated
#### uuid
```
// was
import uuid from 'uuid';
contact.id = uuid.v4();

// 2020-11-04
import {v4 as uuidv4} from 'uuid';
contact.id = uuidv4();
```