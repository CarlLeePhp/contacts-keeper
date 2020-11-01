This is the back-side of the second project, which is in the course.

## Configuration
config/default.json
```
"mongoURI": "your-db-link",
"jwtSecret": "a-string-for-secret"
```

## Notes
#### Server Discovery and Monitoring Engine
There was a warning about it is deprecated. The option should be added in:

```
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
```
