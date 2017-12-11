# docker-puppeteer

## Usage

```bash
$ docker run --rm -v $PWD/screenshot:/output blue1st/puppeteer node -e "$(cat sample.js)"
$ ls screenshot/
keyword_input.png	search_result.png
```

![keyword_input.png](./screenshot/keyword_input.png)

![search_result.png](./screenshot/search_result.png)
