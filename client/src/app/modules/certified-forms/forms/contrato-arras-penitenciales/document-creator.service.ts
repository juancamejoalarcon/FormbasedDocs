import { Injectable } from '@angular/core';
import { CommonsService } from '../../../../core';
import * as FormBasedDocsApi from '../../../../../assets/js/wodotexteditor/localfileeditor.js';
@Injectable()
export class DocumentCreatorService {

  public defaultUri = 'data:application/vnd.oasis.opendocument.text;base64,UEsDBAoAAAAAAIiaSE9exjIMJwAAACcAAAAIAAAAbWltZXR5cGVhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHRQSwMECgAAAAAAiJpIT50YFElaEQAAWhEAABgAAABUaHVtYm5haWxzL3RodW1ibmFpbC5wbmeJUE5HDQoaCgAAAA1JSERSAAAAxgAAAQAIAwAAAN+D+XIAAAMAUExURU9PUVRTVlVUWlhWXFtZXExSYFtfaF1ibFxocWRPSGJRTGJaUmxkXmJkZWJka2VpbGplZWlmaGxoZ2xqa2Rpc2ZufWxvd2xye3FsbHlsZnlua3ZvcnxzbHJycnR0e3d4d3V6fnt0c3t0eXx4cXx6fG50gXB2hHR6g3Z7iXx8g32BhXuBjHaFlnyEk3yNlH+Kmn+RoIZ8coR9e4p/e4WAfYyAfZOHfoSChIOEioWIjoqDg4iGi46Jg4uJjICFkISKk4KNnIqElomLkouNmY6RlYuSm5GHgpKLhJKNjJqNhpKNlJSQjpqQg5yUjJyYjZKRlZOUm5SYnJqVlJqVmJyZlpuanIuWppSWo5Sbo5SdqpmWopudo5qcrJ6hn42iq5Ogqp2ipJujq5uqr5aktJattpiluJyssZuqu52yuqWYjaOblKOdnKmcmqOdoqOfqKieoqeinLKmnKSjpKSlq6WopqWpq6ulpKulqqyopaurrKOksaSqsqStuautsqqsuK2wrKWwtKezuqa5vayys62zurKsqrKusbCvuLiusbSwrbuzrLi4qrOztLK0urO6tbS5vLq0s7m0uru5tbu6u622wrK1wLS7w7S9yru9w7u+y77Bu7bAyr3Bw7vCy7zH0sS1psG3rMa4q8G7tMK8usm9s8q/u8K9wcPAvs3BtMvCvdPDtNDGvNbKv9rLvMPCw8LFysXIxcXIy8rDwsrGyMvIxcvKzMHE0sTL08TN2svN0snO2s7QzcbS3MzQ1MzT28zY3dDFwNPJw9LNy93Px9jPzdDO0dPQzNrSxdvTzNPS09PW2tHY1tXZ3NrV09jW2dvZ1tvb28bO4MrW4tLW49Tb49Te6Nvd4dnf69zi597p8uPXzePX1OHa1OHd3Ojb1uDf4Ofh1+Pg3Org1erj3PLn2+Pj4+Ll6ubo5uXp7Onl4+3p5Ovr7OHn8OTr8uru8ufw8+bw+O3x9Oz0+e74+/Hs5/Dv8PPx7fn07PPz9PT2+PP49fb4+vj29Pj3+Pr49v7+/oR3rmgAAA4VSURBVHja7dwPdBv1fQBw4LFm3ZbCyr/1Dfslq7MEXLqRdrMT4JkZPDyYkfJHRkF5jdUSVnDVOdIk5SJfApzkxN6dJfts5Ugkr88qGLfNqTY+lCNIfXbB+DQpuZe6QlBrecaRkX2Vho1zPlmyfjvJgUIpXVPS1kp/P1s//X6/+6P30d1Xd6ff/XQVuCLSVZABGZABGZABGZABGZABGZABGZABGZABGZABGZABGZDx/6fBOZzk8JDonSXmwhiH0kSMpHEcxXn3cIgcceaoGQp0Ehyxqhm5Lzz21+sdG8pbP9N2S/LELdU3uu4sbd31nebNmslrq0rmp8r7rz3zd+Arhp2b5lcz4wXrmus37yzdqLyzvu6V7947dbPB8I9NX/uvvV9BHN0ld7vaNqrqKjcS6/FH7n5zVW8NIEpZKS1lJEkC2TS4ID9JUjYtVzMApORyTlpJMMQhAzIgAzIgAzKuLEaYlbP4a4WyGEnOpEA2KhcFnkkDwBcNw+El3YDqAOQxiqEJyuQmHXYwFmA8FO4lDdaRQHEwjtB7SYCa6RZ9t0mPfluvbDAfmjY5Bw8HdSyKYY3HiyQ2pNwSWJZPJ+VCOg2k7FJOSGVAdhks5zMJhjhkQAZkQAZkQMbvgTHDCqP+cIKLxrg4My0yEh8vRsb3yjfdgN4ZMl1V8wC9saSEL13jLErG5+74S3yzFcGufcC1Yf26U+uQ8mJkCNMxnr8QFFNiPM4nstxSbA6GOGRABmRcVsb3q/eKQBIFQZLArCRIQiwqFCHjxN4/bUr245qGti6x1l1rR/656ukiZAxvw1XT/Vu26FWaxbXGWpW1v9p5T1HHRo58/1sLGOKQARlXCkMSVr6/np0rXOzEC/+rN8w/iTFC6ynGaadpN0H5XSMIyTS6mJ7Bya7iYgw6jppUPVj19IP9u+xWc1O15kl0m++eUFex7VSSICyJgrwXCWK+LCXk85J3LggwxCEDMiADMiADMlY7I39TY6ToGa+vUYPeUjw9wu7EBjzREZy3e2xaR7LYtsatycXbPntTsrRi81f5req6u6tuqOi9f403VWQMTwLQJJkOB0aIuc7Av+7h7KTg9XT6ijrEpSX4SQUZkHElMWY4Kg1AGoje0AdtTD6bHS8mxgi9w4o0G7dXZSZQY4NFb+wy4XrcrtUJzqJidIzb9K+0mxkviVpwuwbzKwxG3I4r/rureGMj54chDhmQARmQARmQUSyMycQvD/p4f/ynEE9fbFmZIxeU21bKglzjU0BM8+BXDRqJcxcLXFRMxfxxhmfjUmiSDcbmGDY1GuSCYCTBRfLdczN+EBWZBMOykU/FEJUBEXextB+EQ7MU7cVx8nEnx5HMANVCoZnFbhL3Ia5nc0ZkeFcXbmWMw/YAoGjag9hpots4yhHdFE6gdhrDo0O0ncLs5PiwLkBbLX0B4NDRBz3I2Q6pMQgMtJkdMuw7aTCzHT/ekrTYtDNVGfDWt71Votky/BMT++l2KgN4S6890OhNNjnH3C2HEANxL4Gb7tLwenSbJSDep0D8FY8Ti8h9Y/d1WQ8jxjqNIXrY2mHe79xB1+9HdFsOYPj23U+RqCJpew7dcwhpOf7cSUdDl327N2WaRlVHkHHzsu4l0N9jpuhhpdNiosy9xldQk55wuKOvHiUdlK5ZZrg/HUPehUYikjSbzGbk/SkjLRWGFcuPtJwH88OOQUpuWCq0ZbNyJkzL2ZKUBvlKYSDyUqEA0itLg6w861JOmpmTl1mWlvOjTaTC3roELq4aiPkpYHZaXgeQq/mRzjDE5URnSIqjeZalRyieYtxMH9ExUJgyCMCZjwTeTAp8tMO8gwW/5x70T2Is3nW248dfXjR62SODKvbRsH7Pwks2L8CdwGNUuds6kMeRbVrHSU/Ahu/s+DfaYOvakVnAUUyvwpGzJsymxZB7VeN/cMZYBLWR9lZfi9sx6CWt5Lh16iWHN02SvkGkNTHIYNZRzNnk6wuRJOZ4jCCP2ZRHF4gOp72TwMc7so2GKE54Aqvk8CdOf6zpV9wTPLpyIBFWY2zAkxHIgAzIgAzIgIxLTGOWrT/U3GWqtjepSHWfiq4mttKNWm8FPV5UjLfrm659uXThOupfru+5AX2CudH18DVNfxutuzpRVIzXtWhvaCtfiT6JNPcGmlxbzNa2/Q0E0ZaEsQEZkAEZkAEZkAEZvwljDPmlr7KzRck48Y2b1x+1PVRa6alZvH3bk4qyu28qL0LGC3dUlkT2Xbemomzd4nUVny/bte9zj5uLMDYK3yQv5f8WtxWegcTBEIcMyICMVcsYG/fq0AjPxPndfZE4J5jG48POEB9PIEBIxGNskAeTPY7M6mUMFn5f25Pq/neHFrMjzl6nzY4oHSqEvIv82vPPkPFq9z6fS6sYeMfdn1ztW2Ni/DV2lvLz3LiYjHF+juJCNOf1h/2MxEfOcAxHzs8G6AyMDciADMiADMiADMi4fIzhGj2YKheANDc0LcWBEJcEYYYVim5r/MXZ3Lo/+5Po39x+61/Z/0FdV6Zcu/6himuOFxtjZyLXWKtJ21CbIqGw11Uh96vOaVVtR4s6NkYvdj1KMMQhAzKuOEY2IXArd0rOBj9oFAvHkA+Ngpdm0qubMTztbdHQtJGlrYkhBsedbjLI9FqoATdnBJPuvhftVgpM9Jw/uVoZQ4UP2OeSB3cMVj11TGe1cOgho/7vsafadhoqsT2tlqf47c02F2a4zX2ma8G9urfGbPTCBSDM5e+gn5MfIp7M31ifTeVzAAQ5ly6AJWkqCUMcMiADMiADMiBjlTJWLv3yA+h+cRn4kcvB7CctJX2sKVfoDpFy6V//gtKnZAwHBJ7JmHUsT/tZLgV4zpuxxhIzwZHwrog+HG+c40/7zgRy3QwIc+fifsDEGS8ZCTLTgI9IvtE4y/HeeCA2xFqY0LCVORdiJSYuNwX5vmDjQKLfTcf5AfK7mnFfeI4PhkMheUUhlgtSDEPLqxH4pMjqQzpfvsIFQyAWkV/Ce6mMsZ94jPpUC61v8LdakCBoRKxJotftmN3B1B/sbKvsfBc/0vfY88CseA9v7fynrgWl5byr84DF7kp73AtOlTJO6rFHSWNMY3na4XjomLa2uf+NQaxdqbWFHyX346Tb7fJ0fYvUqZNtPfb2NkVIOY/bjn3zeVf7/gYv9kxWMecgsXYDoiSxZ2zVbilsWVC50OQlMmY4jmXBaYnhLsjvEfdTng9Kp7n4TJCJsDw7yg9IZ2J+ns/xXolDGD6YY/hIiAn7+ZFAf1RKcPEgF+WiwdhpeXae49kIz2bZyVPquDwvzwxEGd56Jhg9zXBxdjRhHB/xC/IazwX4cyGeCXEsLzqBGDgXYQcru/2RMB/0hgPgtWl+fnWE+PIlL5G+LCHOA+6Dd+C1zIeCdTa1EtI5Bng/Ery2bYnGRCuOP4jr9elZhcGETA8ZcLXHpHQo0SbklJFaVAJJoWuz+IFtXKUfUlsX1Dm9T1SoFPY276FtDkWTxlHj8aC0OqfI7UibELshJUZ/K0a/WmXEFBofZULfxQiT0asVH9w978CNLUa10ntIpaLqjSqNFZnHm+75BjDiNfeoh6q0uFF18ombB66vvwVIpa/X7+sRy7+6uSbzvQ2jJTdNfnlq7Yatmq3jROvVb4LSJyo2/W/u1i+t/wL9mU37r0583grW3r6WxK+3rBM3nriJ/eKakvfEjf1Xny0FDyg7r/u5w6FtPHnpjEGfSW03kwHbjgNJBFd9fUQjIlSKPIZjCH6H4RDWSjxyCkMJ9D2b7QCR/o92u2UQR52UHUl9y/fCj0q3twbL4vcrklO33V+LvtyrbHRvn6iaqK6osOm11cbvNGfLapv2PHsiUFLWqKqp0O47dMAq3iaUGdAJ/e2z5f01Ouf2Vouj0viD+jJbBfKIKeohWdz3W+1U7McKF6PfK33irL+zJCX+qI/iqSlXgpAvs+NSatiQkAReSgEB9KHTGbk4ByYG5KokyNfjZ8ZXMePVBmR7TXOvSq01NQ9b6AYcRbEF9Hg/asMJC4It2Cr3ZGu/3mrZ0+ZrWcUMB+l4eLzb0YpZWzOv/ryj00nj7Qvk8cF32zqP/xBvP09WzJ/f/fTwAdc7HuKKOMO9AE/UIQMyIAMyIAMyrjSGCSGVWK2mF7FvHWrUtt7XOV+UjLpq6c/P3lBZsnTLw9c0bRgtuzFTlIwnUR1eVTH3n4jF2mZS63qaYGxABmRABmRABmRAxm/MmHADwBV+lz8IQIyVczoy4n3RDxiRHTgd4Rh2ZuC0d3qS5fLTPpTiH8pXls6nyfxtZdJc4df2Ymkwk3x/noszhoO/G8Zbu8Bbr7QOMKY3iNHAsCZSmTRpp541DwAHNbF7rKar421k99hJA3J+k/7NurPAZnhZNBJGu93psmn8dqzbkyAxQ4p0HTZbrPTAlMnqbEdszgMU7Yw1WZ3/4yOAretF9NSLlO5pSq96V+ekKZJxhi4340R5z6zTgCOq5GGTc/jlIabZbJh6tuX5zOLetw86frTH5uk86CAOYh4lTvp2AxVpWdSoreg3cXQHgTRYUUXA5LG8gVkRFUa0PPMzfQOG4Y0WiwXFRvQa3892qzO2ev0uHDc9YiH3qdMth60kcqQhctljYwmALJ3J91llC71KhU7kbKEL64Oq9ItnkBZ9cpFOF3qk0he7kV2ZQmWlKV1ozWc5kFsCUnbQubws1zIZedpyJgukDAxxyIAMyLikwx96tC9d/AzHOWT4p8XPGHOznvkrIDYyIANDHDIgAzIgAzIgAzIgAzIgAzIgAzIgAzIgAzIgAzIg4w+b/g/o2fJFIp8zpQAAAABJRU5ErkJgglBLAwQKAAAAAACImkhPJBd0ji0AAAAtAAAADAAAAGxheW91dC1jYWNoZQEAAQBwKQAAAFAJAAAEEgAAAFAJAAAEJAAAAFAJAAAEMAAAAFAJAAAEPwAAAFBLAwQKAAAACABOb0tPYfHxEGIXAAAfhgAACwAAAGNvbnRlbnQueG1s7V1LbxtHtv4rBV0giAFSEinRppXYA0aiPQxkSUNRmclKKHYXqbKbXZ3qbslyMMCdu5v1vau7Gi8D3CwG2WU5/CfzS+45p6ofJJtiU6Qky7CDWGLX69R5fOdR1fS3f3g/8til0KFU/ouN2ub2BhO+o1zpD19snPVeVZsbf3j5rRoMpCP2XOXEI+FHVUf5EfxkDEb74R58HEjoH2t/T/FQhns+H4lwL3L2VCD8ZNhevvcerWWeuP2yY10e8T4PxcRo58XGRRQFe1tbQay9TaWHW66zJTyBA8Ot2mZtK+2rd9zSa0HfiXU0vyo/ll8BC/PDnQuuo9I8ws750QNVduj70KsOFIhoFPBI9j0xOY0elZ0I++bHjnh0kXL66upq82qHeF17/ry59QYa6a83h2l/EfGya2Hf/Fp+POoLvYxWhNH15FaNzpadwmp4bnygRQjtwEO0jHKz5Mfk5yLiyk4ys5PwsrRtQdc5kge7KU8CdZ4YLd6X1l3smx/7HhUpLNKc+vZ2fcs0p5096b+bo2XPt6g17Tryijr+5c2hUUmiMeCO2GBWujmcq2+kqDYAMKsOoF/VFY4XvvzWCCB9zMxnnO7FRlf1VaQ2GDA66TGS3nWuIT8Ym6pD4QstAaS0GnF/okcgIwds6pJriRwHmramFr+Zmn3uyb6WtQJ6bNONBIXXYSRGa6WoJ4Hp7EhcsS7utoiyr3igwm+mOpqH902t9C9g7qiAyKxl3fLcmqd29jmPI5g3kk6Vhqb6SH9PUH9SSxe3VAdc86HmwUXSAA/QX9OHqhl1BObGvfP69vl5vXn+Z9E/rz8/30hWSWeoBhpsW0cSpGTszVMZCOhhGgwMVOy7BvEMKoj3ME5iE/cSXM3NYKBhoMCf6KH0q5EKXmxsb9aePm1IP98A9gScyLeZ8RR8vI9i7lXRvClSGXAvFMmmASRE9ULI4UVU5VHVE+AccJq6nR9HV8E8hoAEDpApdDLybRxGcnBdDWFSYNiV0u7U3JfIEgeWtuMxGMH1MlEXcTBtpL9vkGj9i0SXlui9CGbni2DuWTCmjWw1xx+g2VGegtDwP3Z2d5q7OxP4O+mjoS89DeUHeFrb3mwEk4CODVWIZ7g/vxmjKU+8TzukVE9RVlqTdj8fTZqjRHcE1RBofjI43fgixE8JnZ9+EccXTF4Bk599DvrjiQHJeadWfzqpRRp1YUa3Hijwlr4LO7LUmHGY8lQnGu8Ty5tfhP8ZCv9zharn69NW238EghK6GvBh0v004qCM2n1wZ/hYqgKGd7ZmjQp9T9BV+1IB+jRCoPwhglIqrUtjedw8TQrez239LylKQ+/cSjqUoFvb29u7zrbor44WtTUWlFLehpO9//zno3hUm48msAsjNlpWOnesV3j0tjeQnvdiw1dGnvOWf3B3/Ql7amsWYcR1VAYIYZzSwQX3wxcbdfp4JV11lX66pfsvQFaYrM+dd0ONMqhadx5pWNmo8kILt+1XWkawkepIuaClnq5G/fsz/tUDkRvhY6cv3GcPHqz0ZtwTTrRRIjir7dR2a83yPKndFJoVNmZ7ra1jpzP14TvdafLsShjI6CvPLb//K2v6prl47CR7CkanHWj8yvybqYreyL+7weaFIkkPBdesfRa4A+6aeze5ak8fMBahL3Flq3F5pmxZVksfZ7LUm6kLPqBWPQwL7021ZqooJVh93y5zGjZ9inPzrnQq/l6C+5Ogmsy8UDw3AKudY2XJzFQMPkUjmAetj8wKatu3RdjBALRu+9Eh7GwF4gG162F4eF/KRZlSrb69W6893Xm+ez6jandU+7lVKloi01yQpd0qFTNP4xCSU0gn1VWVxJbmiLEorxxJoO1xfxhDFooH0FbbYj/SwO+z03SfIsKixzuh/dl0O10qUazcrb3FMWOyfNImUs5ZOpKGjJpswVRVC67llQn408XTVq6nl0+bTlvEnovr4EL4PBL50kDyEGy7qsWIg87gFecqTZKUCPKdgji8mO5i1tUDp5rSFXHgtgir7dNqDD2rkeZuJslVbxwuvuBXMDrlx+1WzcbPu++Y9cjIWJgQLsj5CpO6gpxo3Ri2dIGgKH5bN1EzNdPbEDXja9bgbacJXS5pvifu3dfVmC9u6Ytb+uKWvrilu3BLy9WNVgTWrbkX/21DX7nX6QecjNErNggnoRpE5qytrwV/F1o0yb3bokdIoB7lph9AvhXmzAAbgwBk7YoQwM4eiJjm/PsKMNXLb2npUPwUCz97dWH2oSHRlWHg8euqiiPCXE9cCg+QdsM0G+Z3PC8OwULQwHC92clWXKCXvIux/pmNWqx/4gPz/uCdzP1KDmM9lx8FDxMBB2aWvN8+eb6RUBNwf7b9NNKKtnFDn14tbU+Xf9nqdlun7KR91Om1j/Y7rcP2adIGk7ws+D24gcrdBRTsJO3ENTKlZNrZJ2bRm6ZrbLxs+0weKgggpMvdCuNMvhLgN5aku7aA7sZa6S4rrG777KhzcLyKQGoLdlaWlAPBYp8ziMUiUXloesAPyROk5Afhu8JVukjc66LogWT/I3MFU4DWy/EcL41g8W8Py+v4obb9tNbc2d5p7GzMLmRvlOTGQrTOXaFv4lc94f4+RAsQb2XsDzK+5GbKHt0wazlg+JEBWqKR49UL6cfckePf/AoLhR5/9JkWAwihXB5WGET/8lK6MfewqilgwEgxorrCTlrdXpv90D46aB8cd1vJg9bBn8463fYR/KoqyH10xLTUW4hAeSU3R/hoIaUD2+v+0GkftY9WsJn6J7m3NWHUbPn3xpVnawXT4FSFIZq3ym53tnRTmlOzBZa1M/mz05pbAm0JxWkspzhPZ3F1Sc1Jt/wQcjnkoQXHChM+8wA5TVCGCIofAboZd6Lx7xwQ+xrAGp4rAPBffFeFgNAc79Bh/7exHv/qSockYrAekhauYZDqe3LIdShwBlhFhIFwJPdMT+GBIJUeQi4JoK9AsNBgvilC/Osf61ack9Z+75gdtBm4jG77dQt/XSaaXsDyf/3ja9gguFCPowM7AdYppuxPUFmuNQ+ffBZxbvsvJ8efo0PqbN5e+H8CawGjmYpVQOEZFjikiLD2gyYQeMIHhVAj6UtSDBgVQuYpKe4ZSN/he0tycwFwJWWn88bgHGIssYARgGtfN4oUtSw5aWw4VYRJ55l6fCAhATQ7h8gQv2YJUmwE+LgPoOIi1/YehAtPV+HCAnJQa64Z1iWUL0ANyuPdLTbybP5GFqMag+HsCRsJsKKQOTF30dmFqLphHAg9kI4URZazQEd+lq9Q5G1XDkjMf12dqaUNvbMGU5d+6GgZUEoD3nEosVbnWYumraH15617j3VNt8TuTwgawIfu3aX4f5bJsul6f73t7it3S+gBj1TYTXgpwlvTuaw+Pt0o2etnuc8hYgnLaOsSkx47MYZTyu/4o1gA18rMv8CLlrWGH1azBQofL6WOYteodYghYAgS17QjcoHCEfgSAwabXhp4QngZC+1ifIknbAJixEvlYfIOmkN1gIoNEDXLhYZTMRULhC8j8BoSNYai1zB+K4xdcloutcBwSbX4NOOv/cPx385Ozw5bq1QaP80QrLbJjr/7vt07vlvPe8hni0gijGZ301fq3Yjrd/lzgvPX6jvuvEuNO+mzcNXxR3AakQA1NlENugDu/hTLUBptzfsOV6B7iagfKL94H6hQRvJSgR3IkdCqwgKlmacoUaPcKqKETTGMnsSQk/LPRqQ+mogjAmNCLTKhk7wJVUwy6EeU3d1xaFLbXSE2+fd//R+D+ATmYCKG6ORJBcIUV/Kl8kdDxlTEu8gNmiQZoiAxEMBygrhL8Fr4hOQFADf+1YlBPLXN3cYu5bb7499cOVRsX15K7xYR0+GsNG1WLvAX2ZcaIkoMphPpVQD69KXEryKcQNDkZqkyRVKQ92j8MYQYHDpBoo4B2QeYREeoh5CsD1MtA1QXzgUoYexKQdm+hkkhiIWGzUcLO/VNdthi+8dvTrotYG6vtQL8FAsKEhtTDAGrvMRKo86bZwZDFWJ0vrdD5SVdWQoaSKzoXQP4AYKKlFHZSLn4nKPo8axfcBwDhh9wrwLo4YhQaakqBFRDTaUMSFMEfpsledAyMl4EwLXtjZdtD6Jf0NkkFDZFtEu80kxJYEhftemgzt0Z/uBR0rn9cysQwo1YFErmsUC0ydqesRs0fLCQrLyFewaRkRdQaKBoVLBxjHKse0AM/vd//g9LJy1agnp8PZeJYN4ARgXw/gT5G2jlxo7U4JJCOYq9aPzRFybmYnymLIdzG52Lse46/h10k/TQKietuPnzm0631WXt0x7W1Lrt12dH9Furi7W205Oz8d9PiwL6xwcXOxCl9I67r1tvOmCzVFQE+Gif7nc7vTPY7cn4f7877OxTiTEHKuxH1uu2jk7fdE474/8+ssNedY72V8GbxpLllhKx0UJZowrRcZsnP3BUIgpFssAeY32b5arwbuOHG4o0C+MHjB2eYnHDHf8KxPsc94xJRJYwEGxGtuARGlMYSDxodA1KFdpYUu722JHCbMa4T3ONSBTDfsg9BHAbwNkqOowEz1TU3RV9PERlvoqofqITTLE2XBT6XZMLwDM3xHWPJ0FnBU2e8KLCnrGvQykiMcOTCu7Gi4foibAJZrtQms+r5BdDxi2Cnvbt0IjJUYCPkUfY34bE+Qhb9d8KMyG9JA/Oj/hxjT3wShiFPgrAOBebj2Q44omwjEzxMdV481SBJABUgSIP2GNEQmdWjgr5OsKk9V7MKYt7u5tsvwWwdwpI9hpAbfy3N+2jlS4gFdQBzSFabQ0FkAfiUmOTAYt6K90DAspPyb4xltfDtGA4fRVCYLEDuoSK4kNPQjbppobtsc4oiCn4CBUWWPCJ72gxSkzpknuA3AanWU9ALO+b0u6RtfsPnJ3pPgfM+Pqrn2IVfXPixSGMAgQwn58grMSIELA0ZgRDTmmQMQ4tLylpoMTUZknwc1GIMRVZsDYBYijwZAAQ1sIrPlI+xyfJoaXjjT/GYHo8V3NK75vgrDGBQyE3KTgOiRN2Dz6Bt0E/nVUlK+ABQocchbKn0YpFMlDTmzZ5tJODWiZGfZQnzHEBAyLhcONiIG8ztTJADuXFwBwJ6GsxHbqYwBE4F3j8A7kjNcl2hJeQlIUb5sMADhmEb0WfwB6AfTj+1eZ9JGsg1/q3WamkIglToKXbOrb0bSlOOQNywaCXNEha1QM2giRC9GWh8RZmOGarxkfOq4qD8vtqhMQXy2sBkpfB2cTO/EJDy1WHkFXZjkiTuEeszyQ/JH29qapToXkuIGXXhh+Zhi3nSKe93fX0xHmhmOBs8sDiNpzP2FGStV950TdyAEHWsyfsxYsXzLkQzjvhfjWMvikxwbP1lLefrlDeXnvl9vhov50G//vd8d8POpA//LFzctxrg2vtrFL3bBbXNcn6sFoQA2Lq8S+upLKPDyCH+T2GcgkU4RE1qeEFd0CxBzrJB20ma4r7traE9fufYoIS6AXRFvjucLq8OC89LaNAc/ZjIRx3gAk1wKFKywXSVWYDybHBDV7FQGAkgXSF5a/3cmQHY/wHURvwLIkIh7BA6lNH6IPA72AlJeFnxkEI2E8lS4AicylpyW0WD8GDJwtUmD/+bSR9RFm8Ys7TMxQXEZ3uNQKQgA9WjIMblpSBIKAPYgHtubkhOIicTazeSCzYlRC9r8wsRoIuMdPmdSKTOX22RSpwVQBySFQBPLviUnmXwkTghWkSFpawdEWak1Ru5xQqsU4SCJ8yTnu24w3t/cE5lbRrGvRT8c2MCCsukN64PPGWHh+BxvT5W8XwtbDx75kqL4F3JcGtvs6s/WHi3E8JWLvt031bVTk76hy2eu1u6xAw9pAB5Pa6LQDZN+2DTgsBZL2vUFC5Ny18JPV4iLo4JOiJ8qWnKTYPBaWzTnkG3grNwJx4Alb5iK+Y1DqR0HOOQDdZCwBhTowMs7YWHU1UsuCGJ6ifXBWMTOm4CJftScK0oQXKRQjA4gdgnLa+YCLlngJmJDuNrkbK2D8ABWxZKls3T2owRVhR0lrbxA3MnZAAS5+Nu+ZIp8LGv4Sm/MU9D7Iik6IFAr/OYkLQKPiLuE8stCkYN9d9JsPCBcdzRryAfmL8T+7Z8Bpj1SSPSUrKJkeye0mKTbAfoYtKQck+rDqaXRQJFeZ3FXjWLJuZ1uNbE/xoq7/PNtnB8ZvOfuewc2yq20fHvc6rzn5rv3O8cjnkhFP5yFRWc3aQFPqS8D3SecMkkRuXRnYI6ePQhPiTGGIFn129MJ48pguJjvQkyio507SmTzWvEM+KfPrsShCgjUrwvQ2H3DdGieYkSdrMccIkGe0LF0OfvWAzeCxFRMSoYemrHZfjj3hDOSt+JmzCAw0wWAhwET0hihEQwJoLlcYU3lJMAxsnHKQgzsKKMBy4wGtaeEjqX0qOSyCt41+SvSKVU10QXrNp6DIcor+w+ZUFECr60a422X7M8Rw2OX15i6aJMTkf9aWyCdkcMWT8Qq5jQSPlAYg79k0BGC3aj8UlpnrEMfu6jafM8S4sa5EU/xG8ijH5jEKKl6junZwWK4wCLSKaWD8XaC+bAzZvkwNCDnAE2txH0VElB8N1uinkJNzkyYZsVEt2gzl4jP8Up3TsLQaPCVBkhdVr5DPG2z6n2nyFTjg9k8f4KGIb5Yf8LV1ct36Tqgx4ygoCGSE5vtCkzYkIjOQHHpbgZpSahDbgKNzIGlJ2yjBhU+QNtRYoBNAADZNKR7HrLYhLx7/j+S71iYQ3/mUA0UaZy7HNokPpkgNBdFUrtWrtya0Tt1usVi+z2nJxd4nLQQ/gUpqbUyFxyfkHnooXzL678bLRbDTqzUaz2WTwXxN+h//x491dsipB2HMkrF5ndfq7Ua83gDb4WK/T03oDHiKdjXoFH9axXxN/Vhj+gAHUfYuG4JaaOA5GQDNr4Cf8Cftu0IYbuBLtHP8wmgF6NxmuUG/Oz2XuiRdNJLhJu0uJQvItP5qGDdiIu0KuQf9GhXZIW2oiW+ATsQSGN+gZzWX4ZjgNszSxAfvSPA1sIZbWiUnQZOhoMDNfk3qbUU0jhvVwa/XMtyRrUbmawNgmqQYpBu7FshJVBniBTAC1aZCJ4M8G8R97NxqGQahkyAzLUhxFamcemQHEXmqqk8yMSjeItbiIHYz0kIjqJDWWCBs7gSE0GImHTAJJKVRZWqphl6TtTChPs54YirUaUoUG0oCTUvdGYjwNZgisN5ghz9qW4Y8h3JqQ6Ueq0yATbU4yrZ5pL/GusZK6fJpnfM8hyd434T47bL/GGkIFf+mcHkIWgGWI1gneAPnusM1+ZN+fdTunB519armDWgNEsC4EPebKGAbjGH3O1g+yg58wDnM392wMwn3xHsuGoTSHCZS9UgCE3ZNoNHnbT+FhT2gTd4iCI3z7jQ4jYzx5z84v+pD5Qb5e6uYYbLCHN9QgRpJDCIK18DiGXJX0zUF7LRwyboX1ylB5ygay+YgXK6Ou+GCusWlgQ5S0UN0ApnsPybE9S4TswIlN7KaAJo3l1+y8LkzZd03HrfS9P3RZDhfV6dleFhkXx3501Qr5hAEmjfXw8CUbHvDxP5XHKVOCsDX2uLab5XOuji7gJFaB7HV8OkIUWYGAbpco+mefMZ2SA6wdEzPwH6H3pHl30dZE0wMje28QyLG5JGUtGQvwFgnkiqrwjn9WMkZdsUduwAXQJxmCPmVFEdCs7+MPQzqTvGY9LfsQZJur/aMA9Swy1/xR4HjTxV5JLcmVEmDxI72np2PRt2cGtBTlEdewHxFEmX7QhUpv4gRiYvukb35ejWBuKqKFqHh4bKLN1pRR1kvpW3sc4PfR8OSojjiL62POiGpvLbJi2+lqDrQP8OtUUBQwJUz0QSU5ugrvseTyyLqs2TtsLv3ntpX0B9jcYWs6j3z4t1AeWZeHVrfHqG1ZIeH26pb799vSvlu574/LPpmvlks+JWXMqikRRS//H1BLAwQKAAAAAACImkhPAAAAAAAAAAAAAAAAHAAAAENvbmZpZ3VyYXRpb25zMi9hY2NlbGVyYXRvci9QSwMECgAAAAAAiJpITwAAAAAAAAAAAAAAABgAAABDb25maWd1cmF0aW9uczIvZmxvYXRlci9QSwMECgAAAAAAiJpITwAAAAAAAAAAAAAAABgAAABDb25maWd1cmF0aW9uczIvbWVudWJhci9QSwMECgAAAAAAiJpITwAAAAAAAAAAAAAAABwAAABDb25maWd1cmF0aW9uczIvcHJvZ3Jlc3NiYXIvUEsDBAoAAAAAAIiaSE8AAAAAAAAAAAAAAAAYAAAAQ29uZmlndXJhdGlvbnMyL3Rvb2xiYXIvUEsDBAoAAAAAAIiaSE8AAAAAAAAAAAAAAAAaAAAAQ29uZmlndXJhdGlvbnMyL3N0YXR1c2Jhci9QSwMECgAAAAAAiJpITwAAAAAAAAAAAAAAAB8AAABDb25maWd1cmF0aW9uczIvaW1hZ2VzL0JpdG1hcHMvUEsDBAoAAAAAAIiaSE8AAAAAAAAAAAAAAAAaAAAAQ29uZmlndXJhdGlvbnMyL3BvcHVwbWVudS9QSwMECgAAAAAAiJpITwAAAAAAAAAAAAAAABoAAABDb25maWd1cmF0aW9uczIvdG9vbHBhbmVsL1BLAwQKAAAAAACImkhPtPdo0oMDAACDAwAADAAAAG1hbmlmZXN0LnJkZjw/eG1sIHZlcnNpb249IjEuMCIgZW5jb2Rpbmc9InV0Zi04Ij8+CjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InN0eWxlcy54bWwiPgogICAgPHJkZjp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcvbnMvb2ZmaWNlLzEuMi9tZXRhL29kZiNTdHlsZXNGaWxlIi8+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiI+CiAgICA8bnMwOmhhc1BhcnQgeG1sbnM6bnMwPSJodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy9ucy9vZmZpY2UvMS4yL21ldGEvcGtnIyIgcmRmOnJlc291cmNlPSJzdHlsZXMueG1sIi8+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9ImNvbnRlbnQueG1s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';

  public originalDocumentBodyClone: any;
  public currentDocumentBodyClone: any;

  constructor(
    private commonsService: CommonsService,
  ) { }

  init() {
    this.commonsService.toggleSpinner();
    this.createEditorFromURI('fillForm', 'editorContainer', this.defaultUri);
      setTimeout(() => {
        this.resizeDocumentContainer();
        window.addEventListener('resize', this.resizeDocumentContainer);
        this.originalDocumentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
        this.commonsService.toggleSpinner();
      }, 5000);
  }

  createEditorFromURI(formType: string, idOfContainer: string = 'editorContainer', dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], {type: mimeString});
    const url = URL.createObjectURL(blob);
    window['DOCUMENTOURL'] = url;
    FormBasedDocsApi.createEditor(formType, idOfContainer);
  }

  getEditorSession() {
    return FormBasedDocsApi.getEditorSession();
  }

  resizeDocumentContainer() {
    FormBasedDocsApi.documentToFitScreen();
  }

  buildDocument(steps: any) {
    this.currentDocumentBodyClone = this.originalDocumentBodyClone.cloneNode(true);
    // 1.- Change doc structure
    this.structuralChanges(steps);
    // 2.- Change values
    this.replacements(steps);

    document.getElementsByTagName('office:text')[0].parentElement.replaceChild(
      this.currentDocumentBodyClone.cloneNode(true), document.getElementsByTagName('office:text')[0]
    );
  }
  /************************/
  /* CHANGE DOC STRUCTURE */
  /************************/
  structuralChanges(steps: any) {
    steps.forEach((step: any) => {
      if (step.type === 'iRadioC') {
        this.buildForRadioC(step);
      } else if (step.type === 'iCheckbox') {
        // this.buildForCheckbox(step);
      } else if (step.type === 'iForEach') {
        this.buildForEach(step);
      }
    });
  }

  buildForEach(step: any) {
    console.log(step);
    step.content.forEach((content: any) => {
      // Find paragrah
      const elementContainingWord = this.findword(content.wordToReplace);
      // Case where we just have the word, and nothing more
      if (elementContainingWord.textContent === content.wordToReplace) {
        // Reversed copy of the array so we inject elements in order
        const newarray = content.modifiedReplacements.slice().reverse();

        newarray.forEach((modifiedReplacement: any, index: number) => {
          let exactElementContainingWord: any;
          const regexp = new RegExp(step.wordToReplace, 'g');

          if (index !== content.modifiedReplacements.length - 1) {
            const elementContainingWordClone = elementContainingWord.cloneNode(true);
            elementContainingWord.parentNode.insertBefore(elementContainingWordClone, elementContainingWord.nextSibling);
            exactElementContainingWord = elementContainingWordClone;
          } else {
            exactElementContainingWord = elementContainingWord;
          }

          while (exactElementContainingWord.firstElementChild) {
            exactElementContainingWord = exactElementContainingWord.firstElementChild;
          }
          exactElementContainingWord.innerHTML = exactElementContainingWord.innerHTML.replace(regexp, modifiedReplacement);
        });

        const newarray2 = content.modifiedExtraReplacements.slice().reverse();
        newarray2.forEach((modifiedExtraReplacement: any, index: number) => {
          modifiedExtraReplacement.forEach((modifiedExtraReplacementArray: any) => {
            modifiedExtraReplacementArray.forEach(((modifiedReplacement: any)=> {
              const elementContainingWord = this.findword(modifiedReplacement.identifier);
              let exactElementContainingWord: any;
              const regexp = new RegExp(step.wordToReplace, 'g');
              console.log(elementContainingWord);
            }));
          })
          // if (index !== content.modifiedReplacements.length - 1) {
          //   const elementContainingWordClone = elementContainingWord.cloneNode(true);
          //   elementContainingWord.parentNode.insertBefore(elementContainingWordClone, elementContainingWord.nextSibling);
          //   exactElementContainingWord = elementContainingWordClone;
          // } else {
          //   exactElementContainingWord = elementContainingWord;
          // }
        });
      }
    });
  }

  buildForRadioC(step: any) {
    let elementContainingWord = this.findword(step.wordToReplace);
    const regexp = new RegExp(step.wordToReplace, 'g');
    let replacement: string;
    step.radios.forEach((radio) => {
      if (radio.checked) {
        replacement = radio.replacement;
      }
    });

    // // Case where we have just one paragraph with the wordToReplace
    // if (elementContainingWord.children.length === 1) {
    //   elementContainingWord.firstChild.innerHTML = replacement;
    // } else {
    //   while (elementContainingWord.firstElementChild) {
    //     elementContainingWord = elementContainingWord.firstElementChild;
    //   }
    //   elementContainingWord.innerHTML = elementContainingWord.innerHTML.replace(regexp, replacement);
    // }
    while (elementContainingWord.firstElementChild) {
        elementContainingWord = elementContainingWord.firstElementChild;
      }
    elementContainingWord.innerHTML = elementContainingWord.innerHTML.replace(regexp, replacement);
  }

  buildForCheckbox(step: any) {
    const elementContainingWord = this.findword(step.wordToReplace);
    let replacement = step.replacement;
    step.checkboxes.forEach((checkbox) => {
      // Check if it contains the word (rules)
      if (step.replacement.includes(checkbox.wordToReplace)) {
        if (checkbox.checked) {
          const regexp = new RegExp(checkbox.wordToReplace, 'g');
          replacement = replacement.replace(regexp, checkbox.replacement);
        } else {
          const regexp = new RegExp(checkbox.wordToReplace, 'g');
          replacement = replacement.replace(regexp, '');
        }
      }
    });
    // Case where we have just one paragraph with the wordToReplace
    if (elementContainingWord.children.length === 1) {
      elementContainingWord.firstChild.innerHTML = replacement;
    }
  }
  /*****************************/
  /*END OF CHANGE DOC STRUCTURE*/
  /*****************************/

  replacements(steps: any) {
    steps.forEach((step: any) => {
      if (step.type === 'iText' || step.type === 'iDate') {
        let elementContainingWord = this.findword(step.wordToReplace);
        const regexp = new RegExp(step.wordToReplace, 'g');
        if (elementContainingWord.innerHTML !== step.wordToReplace) {
          // Find the innermost element containing the word
          elementContainingWord = this.findExactContainingElement(step.wordToReplace, elementContainingWord);
        }
        if (elementContainingWord) {
          elementContainingWord.innerHTML =
          elementContainingWord.innerHTML
          .replace(
          regexp,
          `<span class="highlight ${step.isFocused ? 'focused' : ''}" data-identifier="${step.wordToReplace}">${step.replacement}</span>`);
        }
      }
    });
  }

  findword(wordToReplace: string, bodyClone: any = this.currentDocumentBodyClone) {
    // USE ARRAY FOR ALL VALUES
    const children = bodyClone.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (!this.elementIsExcluded(children[i])) {
        if (children[i].innerHTML.includes(wordToReplace)) {
          return children[i];
        }
      }
    }
  }

  findExactContainingElement(wordToReplace: string, bodyClone: any) {
  let element: any = bodyClone;
    while (element.childNodes && element.childNodes.length > 0 && element.innerHTML.includes(wordToReplace)) {
      element.childNodes.forEach(((el: any) => {
        if (el.nodeName !== '#text') {
          if (el.innerHTML.includes(wordToReplace)) {
            element = el;
          }
        } else {
          if (el.textContent.includes(wordToReplace)) {
            element = el;
          }
        }
      }));
    }
    if (element.nodeName === '#text') {
      element = element.parentNode;
    }
    return element;
  }

  elementIsExcluded(element: any) {
    const excludedElements = [
        'office:text',
        'text:sequence-decls',
        'text:sequence-decl',
        'draw:frame',
        'draw:image',
        'office:annotation',
        'office:annotation-end',
        'dc:creator',
        'dc:date'
    ];
    return excludedElements.includes(element.nodeName);
  }
}
